import type { Component } from "solid-js";
import { createSignal, Show } from "solid-js";

const RandomLink: Component = () => {
    const [random, setRandom] = createSignal([]);

    return(
        <div id="randomLink">
			<h3>At the Moment, we Only Have an Active Page for Books and Education.</h3>
			<h3>If you'd like to get a random link, press the button below.</h3>
            <a href="/error"><button>Please Don't Push Me, I Don't Work Yet</button></a>
		</div>
    )
}

export default RandomLink;