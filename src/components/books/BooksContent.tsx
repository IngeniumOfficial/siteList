import GeneralListComponent from '../GeneralListComponent';

import bsvg from '/books.svg';
import saasvg from '/studiesandarticles.svg';
import owsvg from '/otherwebsites.svg';
import esvg from '/extensions.svg';
import eac from '/educationandcourses.svg';

const arr = [
    saasvg,
    bsvg,
    eac,
    owsvg,
    esvg
]


export default function BooksContent(){
    return(
        <GeneralListComponent fetchLink='http://localhost:3000/basicList' img={arr} />
    )
}