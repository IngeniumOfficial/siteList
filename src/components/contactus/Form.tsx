import type { Component } from "solid-js";
import { createSignal, Show, Ref, createMemo } from "solid-js";
import { formurl } from '../../environment';


const Form: Component = () => {
    // const [showSubmit, setShowSubmit] = createSignal(false);
    const [error, setError] = createSignal(false);
    const [errorField, setErrorField] = createSignal('');

    let nameRef: any;
    let emailRef: any;
    let messageRef: any;
    let antiSpam: any;

    const data = {
        name: '',
        email: '',
        message: ''
    };

    

    const errorHandler = (field: any) => {
        setErrorField(field);
        setTimeout(() => setError(false), 5000);
        setError(true);
    }

    const validateData = () => {
        if(!nameRef.value){
            data.name = 'Anonymous'
        } else {
            data.name = nameRef.value
        }
        
        if(!emailRef.value){
            errorHandler("Email");
            return;
        } else {
            data.email = emailRef.value;
        }
        
        if(!messageRef.value){
            errorHandler("Message");
            return;
        } else {
            data.message = messageRef.value;
        }

        if(antiSpam.value != 5){
            errorHandler('Antispam');
            return;
        } else {
            console.log("Data:", data);
        }
        submitData();
        
    }

    const url = formurl;

    const submitData = async() => {
        const result = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: JSON.stringify(data),
            // mode: 'no-cors'
        })
        .catch((err) => console.log('err', err));

        if(result.status == 200){
            window.location.href = '/thankyou'
        }
    }

    return(
        <div id="formComponent">
            <h3>Name: (optional)</h3>
            <input ref={nameRef}></input>
            <h3>Email: </h3>
            <input ref={emailRef}></input>
            <h3>Message: </h3>
            <textarea ref={messageRef}></textarea>
            <h3>What is 2+3? Anti-spam question. The form won't send without this.</h3>
            <input ref={antiSpam}></input>
            <Show when={error()}>
                <h4 style={{"background-color": "white", "color": "red", "padding": "0.2em 0.5em 0.2em 0.5em"}}>The {errorField()} field is Invalid!</h4>
            </Show>
            <button onClick={validateData}>Submit</button>
        </div>  
    )
}

export default Form;