import React, {useState} from 'react'

export default function TextForm (props) {

    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Text converted to uppercase","success")
    }

    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Text converted to lowercase","success")
    }

    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    
    const handleClear=()=>{
        let newText="";
        setText(newText)
        props.showAlert("Text cleared","success")

    }
    const[text,setText] = useState("")
    return (
        <>
        <div className="container" style={{color:props.mode==='dark' ? 'white' :'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark' ? '#c0b6b6' :'white', color:props.mode==='dark' ? 'white' :'black' }} id="MyBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick} >Convert to uppercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick} >Convert to lowercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleClear} >Clear text</button>


        </div>
        <div className="container" style={{color:props.mode==='dark' ? 'white' :'black' }}>
            <h1>Text Summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text.length>0?text :"Enter something in the textbox to preview it here"}</p>
        </div>
        </>
    )
}