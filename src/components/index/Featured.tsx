import type { Component } from "solid-js";

/* Books SVGs */
import bsvg from '/books.svg';
import saasvg from '/studiesandarticles.svg';
import owsvg from '/otherwebsites.svg';
import esvg from '/extensions.svg';
import eac from '/educationandcourses.svg';


/* OSINT SVGs */
import images from '/images.svg';
import ipAndDomains from '/ipAndDomains.svg';
import searchEngines from '/searchEngines.svg';
import socialMedia from '/socialMedia.svg';
import peopleAndIdentity from '/peopleAndIdentity.svg';
import governmentAndPublicRecords from '/governmentAndPublicRecords.svg';

/* JSON Imports */
import booksJSON from '../../jsonFiles/books.json';
import osintJSON from '../../jsonFiles/osint.json';


/*
    Needs a system for determining a featured link based on the Date of the Month.
    The Component below can already generate the dates, just needs some encouragement to 
    do something worthwhile.
*/


const Featured: Component = () => {

    const d = new Date();
    const date = d.getDate();

    const tempURL = "https://www.boredbutton.com/"

    const copyToClipboard = (copied: any) => {
        navigator.clipboard.writeText(copied);
    }


    return(
        <div id="featuredComponent">
            <div id="title-icon">
                <h4>Bored Button</h4>
                <h4>*</h4>
            </div>
            <a href={tempURL} target="_blank"><div id="description-link">
                <p>
                    Bored Button attempts to cure your boredom by pressing a button and grabbing your attention
                    with a fun activity.
                </p>
                <p>
                    {tempURL}
                </p>
            </div></a>
            <h4 id="saveIcon" onClick={() => copyToClipboard(tempURL)}>Save</h4>
        </div>
    )
}

export default Featured;