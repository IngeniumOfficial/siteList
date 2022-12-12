import GeneralListComponent from '../GeneralListComponent';

import bsvg from '/books.svg';
import saasvg from '/studiesandarticles.svg';
import owsvg from '/otherwebsites.svg';
import esvg from '/extensions.svg';
import eac from '/educationandcourses.svg';

/* 
    This is a middle step in between the page and the GeneralListComponent.
    In order to keep the GeneralListComponent modular, small components are
    created that pass any additional data to GeneralListComponent as props
    (this includes fonts and general data)
*/

const arr = [
    saasvg,
    bsvg,
    eac,
    owsvg,
    esvg
]


export default function BooksContent(){
    return(
        <GeneralListComponent data={ "balh" } img={arr} />
    )
}