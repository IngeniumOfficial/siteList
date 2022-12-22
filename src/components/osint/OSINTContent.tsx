import type { Component } from "solid-js";
import GeneralListComponent from "../GeneralListComponent";
import osintJSON from '../../jsonFiles/osint.json';
import images from '/images.svg';
import ipAndDomains from '/ipAndDomains.svg';
import searchEngines from '/searchEngines.svg';
import socialMedia from '/socialMedia.svg';
import peopleAndIdentity from '/peopleAndIdentity.svg';
import governmentAndPublicRecords from '/governmentAndPublicRecords.svg';

const arr = [
    images,
    ipAndDomains,
    searchEngines,
    socialMedia,
    peopleAndIdentity,
    governmentAndPublicRecords
]

const OSINTContent: Component = () => {
    return(
        <GeneralListComponent data={osintJSON} img={arr} />
    )
}

export default OSINTContent;