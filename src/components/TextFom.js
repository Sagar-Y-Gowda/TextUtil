import React, { useState } from 'react'

export default function TextFom(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to Uppercase","success");
    }
    const handleonChange = (event) => {
        setText(event.target.value);
    }
    const handleLowClick = () => {
        let ltext = text.toLowerCase();
        setText(ltext);
        props.showAlert("Text converted to Lowercase","success");
    }
    const handleClear = () => {
        setText("");
        props.showAlert("Text cleared","success");
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard","success");
      }

    const [text, setText] = useState('Enter text here');

     function Wordcounter()
     {
         const wrdcnt = text.split(/\s+/).filter(Boolean).length;
         return wrdcnt;
     }
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#4d09ce':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleonChange} rows="5"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy</button>
        </div>
        <div className="container"style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Text Summary</h2>
            <p>{Wordcounter()} words and {text.length} characters </p>
        </div>
        </>
    )
}
