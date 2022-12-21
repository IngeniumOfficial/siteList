import type { Component } from "solid-js";
import { Ref, onMount } from 'solid-js';

import ConfettiGenerator from 'confetti-js';

const ConfettiCanvas: Component = () => {

    let canvasRef: any;

    onMount(() => {
        var confettiSettings = { target: canvasRef };
        var confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
    })


    return(
        <div id="confettiStuff">
            <canvas ref={canvasRef}>
            </canvas>
            <div id="text">
                <h3>
                    Your message was sent successfully.
                    Thank you for Helping Improve SiteList.
                </h3>
                <a href="/"><button>Press Here to Go Home</button></a>  
            </div>
        </div>
    )
}


export default ConfettiCanvas;