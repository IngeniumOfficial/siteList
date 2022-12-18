import type { Component } from "solid-js";
import { createSignal, Show } from "solid-js";

import hamburgerRightUnaligned from "/hamburgerRightUnaligned.svg";

const NavBar: Component = () => {
    // Show Menu pops up a secondary menu available for mobile users
    const [showMenu, setShowMenu] = createSignal(false);

    // This signal decides when the menu will display the submenus for browse
    // or if it will redirect to collection page on second click
    const [browse, setBrowse] = createSignal(0);

    // this is the style for the background for the opened menu
    const leftMenuStyle = {
        "z-index": "1",
        "position": "fixed",
        "width": "60%",
        "left": "0",
        "bottom": "0",
        "top": "0",
        "background-color": "black",
        "opacity": "0.8"
    }

    // this is the style for the menu div itself
    const hiddenMenuStyle = {
        "z-index": "1",
        "position": "fixed",
        "width": "40%",
        "right": "0",
        "height": "100%",
        "background-color": "#1C3879",
        "opacity": "1",
        "color": "white",
        "text-align": "right",
        "padding-right": "0.7em",
        "padding-top": "1em"
    }

    const universal = { "color": "white", "font-size": "0.9em" }

    const viewMenu = () => {
        setShowMenu((prev: any) => !prev);
    }

    const browseClick = () => {
        if(browse() === 0){
            setBrowse(1);
        } else {
            location.href="/collection"
        }
    }
    
    return(
        <Show when={window.innerWidth >= 400} fallback={
            <nav>
               <h3 id='sitetitle'>Sitelist</h3>
               <img onclick={viewMenu} src={hamburgerRightUnaligned} /> 
               <Show when={showMenu()}>
                    <div id="leftManu" style={leftMenuStyle} onClick={viewMenu}></div>
                    <div id="hiddenMenu" style={hiddenMenuStyle}>
                        <img onClick={viewMenu} style={{ "margin-right": "0", "background-color": "white", "border-radius": "1.3em" }} src={hamburgerRightUnaligned} />
                        <a href="/"><h3 style={{"color": "white", "text-decoration": "underline"}}>Home</h3></a>
                        <h3 onClick={browseClick} style={{"color": "white", "text-decoration": "underline"}}>Browse Links</h3>
                        <Show when={browse()}>
                            <a href="/books"><h4 style={universal}>Ebooks and Education</h4></a>
                            <a href="/osint"><h4 style={universal}>OSINT</h4></a>
                            <a href="/books"><h4 style={universal}>Programming Tools</h4></a>
                            <a href="/books"><h4 style={universal}>Security Resources</h4></a>
                            <a href="/books"><h4 style={universal}>Everyday Utility</h4></a>
                            <a href="/books"><h4 style={universal}>Random Utility</h4></a>
                            <a href="/books"><h4 style={universal}>Random Interesting</h4></a>
                            <a href="/books"><h4 style={universal}>Random Funny</h4></a>
                        </Show>
                        <a href="/aboutus"><h3 style={{"color": "white", "text-decoration": "underline"}}>About Us</h3></a>
                    </div>                    
               </Show>
            </nav>
        }>
            <nav>
                <h3 id='sitetitle'>Sitelist</h3>
                <div id="right-nav">
                    <a href="/"><h3 id="home-button">Home</h3></a>
                    <div id="dropdown-section">
                        <a href='/collection'><h3 id="browse-button">Browse</h3></a>
                        <div id="dropdown-content">
                            <a href="/books"><h3>Ebooks and Education</h3></a>
                            <a href="/osint"><h3>OSINT</h3></a>
                            <a href="/books"><h3>Programming Tools</h3></a>
                            <a href="/books"><h3>Security Resources</h3></a>
                            <a href="/books"><h3>Everyday Utility</h3></a>
                            <a href="/books"><h3>Random Utility</h3></a>
                            <a href="/books"><h3>Random Interesting</h3></a>
                            <a href="/books"><h3>Random Funny</h3></a>
                        </div>
                    </div>
                    <a href="/aboutus"><h3 id="aboutus">About Us</h3></a>
                </div>
            </nav>
        </Show>
    )
}

export default NavBar;