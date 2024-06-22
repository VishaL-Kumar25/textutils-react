import React,{useState} from "react";

function TextForm(props) {

  const [text, setText] = useState("Enter your text here...");

  const removeVal = ()=>{
    if(text==="Enter your text here...")
    setText("");
  }
  const renametext = (e)=>{
    setText(e.target.value);
  }
  
const transformTextUp = ()=>{
  setText(text.toUpperCase());
  props.showAlert("Text converted to uppercase", "success");
}

const transformTextLo = ()=>{
  setText(text.toLowerCase());
  props.showAlert("Text converted to lowercase", "success");
}

const copyText = ()=>{
  let textInput = document.getElementById("myBox");
  textInput.select()
  navigator.clipboard.writeText(textInput.value);
  props.showAlert("Text copy to clipboard", "success");
}
const removeSpaces = ()=>{
  setText(text.replace(/\s+/g, ' '));
  props.showAlert("Extra Spaces Removed", "success");
}


  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" style={{ backgroundColor: props.mode === "dark"||"primary" ? "transparent" : "white", color: props.mode === "dark" ? "white" : "black" }} value={text} id="myBox" rows="8" onClick={removeVal} onChange={renametext}></textarea>
      </div>
      <button className="btn btn-primary" onClick={transformTextUp}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={transformTextLo}>Convert to Lowercase</button>
      <button className="btn btn-primary" onClick={copyText}>Copy</button>
      <button className="btn btn-primary mx-2" onClick={removeSpaces}>Remove extra Spaces</button>
    </div>
    <div className="container my-3">
      <h2>Your Text Summary</h2>
      <p>{text.trim().length===0?0:text.trim().split(" ").length} words, and {text.length} characters</p>
      <p>Take {0.08*(text.trim().length===0?0:text.trim().split(" ").length)} Minutes reading Time</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter your text here to Preview"}</p>
    </div>
    </>
  );
}

export default TextForm;
