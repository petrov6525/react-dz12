import React, { useState } from "react";

function Button(props) {
    const generateClick = () => {
        const index=getRandomIntInclusive(0,quotes.length-1);

        props.onClickAct(quotes[index]);
    }
    return (
        <div>
            <button className="rnd-button" onClick={generateClick}>
                Generate
            </button>
        </div>

    );
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }
  


const quotes = [
    { quote: "Quote 1", author: "Author 1" },
    { quote: "Quote 2", author: "Author 2" },
    { quote: "Quote 3", author: "Author 3" },
    { quote: "Quote 4", author: "Author 4" },
    { quote: "Quote 5", author: "Author 5" },
    { quote: "Quote 6", author: "Author 6" },
    { quote: "Quote 7", author: "Author 7" },
    { quote: "Quote 8", author: "Author 8" },
    { quote: "Quote 9", author: "Author 9" },
    { quote: "Quote 10", author: "Author 10" },
];




function Quote(props) {

    
    return (
        <div>
            
            {props.text}
        </div>
    );
}


export default function Task3() {

    const [text, setText] = useState("");


    const setNewQuote = (quote) => {
        setText("quote: "+quote.quote+"\nauthor: "+quote.author);
    }
    return (
        <div>
            <Button onClickAct={setNewQuote} />
            <Quote text={text}/>
        </div>
    );
}