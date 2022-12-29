import { Component, onMount } from "solid-js";
import { createSignal, Show } from "solid-js";
import books from '../../jsonFiles/books.json';
import osint from '../../jsonFiles/osint.json';

const randomArr = [
    books,
    osint
]

const RandomLink: Component = () => {
    const [random, setRandom] = createSignal([]);
    const [randomMessage, setRandomMessage] = createSignal("Random Link")
    
    onMount(() => {
        // Math.random() * (max - min) + min; returns a value that is greater than or equal to min
        // and less than (not equal to) max
        const resJSON = Math.floor(Math.random() * (randomArr.length - 0) + 0);

        console.log(resJSON);
    })
    

    return(
        <div id="randomLink">
			<h3>
                While We are working on Making All of Our Pages Active,
                feel free to check out our pages for books and OSINT.
            </h3>
			<h3>If you'd like to get a random link, press the button below.</h3>
            <h3 class="button">{randomMessage()}</h3>
		</div>
    )
}

export default RandomLink;