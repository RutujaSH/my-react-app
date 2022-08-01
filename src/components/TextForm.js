import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick= ()=>{
      console.log("Upper was clicked " +text);
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("converted to Upper","success");
        }
    const handleLowClick= ()=>{
        console.log("Lower was clicked " +text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to Lower","success");

      }

    const handleClearClick=()=>{
        console.log("Text Cleared ");
        setText("")
        props.showAlert("Cleared","success");

    }
    const handleOnChange =(event)=>{
     console.log("On change");
     setText(event.target.value)

    }

    const handleExtraSpace =()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Space Maintained","success");

  }

    const [text, setText] = useState('Enter Text');


  return (
    <>
    <div className='container'>
      <h1 style={{color: props.mode ==='light'?'black':'white'}}>{props.heading}</h1>
      <div className="mb-3">
      <label htmlFor="Mybox" className="form-label"></label>
      <textarea className="form-control" value ={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='light'?'white':'grey' , color: props.mode ==='light'?'black':'white'} } id="Mybox" rows="8"></textarea>
      </div>
      <button className='btn.btn.primary' onClick={handleUpClick}> Convert to UpperCase</button>
      <button className='btn.btn.primary' onClick={handleLowClick}> Convert to LowerCase</button>
      <button className='btn.btn.primary' onClick={handleClearClick}> Clear Text</button>
      <button className='btn.btn.primary' onClick={handleExtraSpace}> Clear Extra Space</button>

    </div>
    <div className="container my-3">
        <h2 style={{color: props.mode ==='light'?'black':'white'}}>Your text summary</h2>
        <p>{text.length>0 ? text.trim().split(" ").length : 0} words and {text.length} character</p>
        <p>{0.008 * text.split("").length} Minutes read</p>
        
        <h2 style={{color: props.mode ==='light'?'black':'white'}}>Preview</h2>
        <p>{text.length>0?text:"Enter Something"}</p>
    </div>
    </>
  )
}

