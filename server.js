import { createRequire } from "module";
const require = createRequire(import.meta.url);
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const path = require('path');
const express = require('express');

const app = express();

let PORT = 8080;

app.use(express.static(path.resolve(__dirname, 'dist')));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})