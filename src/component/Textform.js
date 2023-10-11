import React, {useState} from "react";

export default function Textform(props) {

    const[text, setText] = useState("enter your text ")
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("The font is changed to uppercase", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
  return (
    <div>
        
      <div className="container my-3">
        
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h3>Enter your text here:</h3>
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows={8}
            
          />
        </div>
        <button type="button" onClick={handleUpClick} className="btn btn-primary">UpperCase</button>
      </div>

    </div>
  );
}
