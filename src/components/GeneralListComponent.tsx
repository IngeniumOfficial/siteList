import { createSignal, onMount, Show, For, Switch, Match } from 'solid-js';
import type { Component } from 'solid-js';

import savelinksvg from '/savelink.svg';

import '../styles/components/GeneralListComponent.scss';


const GeneralListComponent: Component<{ img: Array<any>, data: any }> = (props: any) => {
    /* This signal tracks and assists changes in views from full section to selectable subsections and vice versa */
    const [verify, verifySet] = createSignal<boolean>(false);
    /* Assists in manipulating the Select element for the second view */
    const [select, selectSet] = createSignal('');

    // This is where the data goes, used previously for backend access, redundant now that site is static
    const [total, totalSet] = createSignal<any>([]);
    // const [total2, total2Set] = createSignal<any>([]);

    // ToDo: fix this, remove the signal above and set the stuff equal to this
    onMount(() => {
        totalSet(props.data);
    })
    
    // Handles view changes by altering verify signal on button change
    function buttonHandler(){
        if(verify() === false){
            verifySet(true);
        } else {
            verifySet(false);
        }
    }

    function selectChange(e: any) {
        console.log(e);
        selectSet(e);
    }
    
    return(
        <div id='general-list'>
            <h4>
                Press the <img src={savelinksvg} id='save-link-description'></img> button to save the url to clipboard.
            </h4>
            <Show
                when={verify()}
                fallback={
                    <div id='mainSection'>
                        <button onClick={buttonHandler}>Press Here to Switch Views</button>

                        <div id='mainSubsection'>
                            <For each={total()}>{(item: any, index) =>
                                <div class='subsections'>
                                    <h3 class='subsectionTitles'>{item.subsectionName}</h3>

                                    {/*Second Layer Subsection*/}
                                    <For each={item.SLS}>{(item2, index2) =>
                                        <ListReturn obj={item2} subsectionTitle={item.subsectionName} img2={props.img} indexForImg={index} />
                                  }</For>


                                </div>
                            }</For>


                        </div>
                    </div>
                }
            >
                <div id='mainSection2'>
                    <button onClick={buttonHandler}>Press Here to Switch to Full List View</button>
                    <div id='selector'>
                        <label for='listView'>Subsection: </label>
                        <select name='listView' id='listView' onChange={(e) => {selectChange(e.currentTarget.value)}}>
                            <For each={total()}>{(itemm: any, indexx) =>
                                <option value={itemm.subsection} class='sTitle'>{itemm.subsectionName}</option>
                            }</For>
                        </select>
                    </div>


                    <Switch fallback={
                        <div class='subsections'>
                            <h3 class='subsectionTitles'>{total()[0].subsectionName}</h3>
                            <For each={total()[0].SLS}>{(ite, ind) =>
                                <ListReturn obj={ite} subsectionTitle={total()[0].subsectionName} img2={props.img} indexForImg={0} />
                            }</For>
                        </div>
                    }>


                        <For each={total()}>{(item: any, index4) =>
                            <Match when={select() === item.subsection}>
                                <div>
                                    <h3 class='subsections'>{item.subsectionName}</h3>
                                    <For each={item.SLS}>{(item2, index5) =>                                   
                                        <ListReturn obj={item2} subsectionTitle={item.subsectionName} img2={props.img} indexForImg={index4} />
                                    }</For>
                                </div>
                            </Match>
                        }</For>


                    </Switch>
                </div>


            </Show>
        </div>
    )
}



function ListReturn(props: any){
    const [imgi, imgiSet] = createSignal(0)
    if(props.indexForImg && props.indexForImg != undefined){
        imgiSet(props.indexForImg);
    }

    function copyToClipboard(copied: any){
        navigator.clipboard.writeText(copied);
    }

    return(
        <div class='secondLayerSubsections'>

            {/* Only show the SLS Title if it exists, otherwise show the Title */}
            <Show
                when={props.obj.SLSName != 'default'}
                fallback={<h4>{props.subsectionTitle}</h4>}
            >
                <h4 class='secondLayerTitles'>{props.obj.SLSName}</h4>
            </Show>
    
            {/*Lists inside Second Layer Subsections*/}
    
            <For each={props.obj.SLSList}>{(listItem: any, itemIndex) =>       
                // <a href={listItem.url} target="_blank">
                    <div class='contentItem'>
                        <a href={listItem.url} target="_blank">
                            <div class='title-icon'>
                                <h4>{listItem.name}</h4>
                                <img class='idLogo' src={props.img2[imgi()]}></img>
                            </div>
                        </a>
                        <div class='description-link'>
                            <a href={listItem.url} target="_blank"><p class='description'>{listItem.description}</p></a>
                            <a href={listItem.url} target="_blank"><p>{listItem.url}</p></a>
                        </div>
                        <button onClick={() => copyToClipboard(listItem.url)}>
                            <img src={savelinksvg}></img>
                        </button>
                    </div>
                // </a>
            }</For>
        </div>
    )
}


export default GeneralListComponent;