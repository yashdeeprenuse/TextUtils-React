import React, { useState } from "react";

export default function Textcheck(props) {

  const [text, setText] = useState("");

  let func1 = (e) => {
    setText(e.target.value);
  };
  let func2 = () => {
    let upcasevalue = text.toUpperCase();
    setText(upcasevalue);
    props.upCase();
  };
  let func3 = () => {
    let LocaseValue = text.toLowerCase();
    setText(LocaseValue);
    props.loCase();
  };
  
// getting no. of charecters after removing space
  let charValue = text.replaceAll(" ", "").length;

//getting no. of words  
  if (charValue === 0) {
    var wordValue = 0;
  } else {
    var removeTrialSpace = text.trimEnd();
    // wordValue = removeTrialSpace.split(" ").length; ---> this will only split by space not by space n line
    wordValue = removeTrialSpace.split(/\s+/).length 

  }


//code for displaying char presnt in enterd string
let SpCh = ["!", "@", "#", "$", "%", "^", "&", "*"];

let texArr = Array.from(text);

  let spValue = texArr.filter((value) => {
    for (let i = 0; i <= SpCh.length; i++) {
      if (value === SpCh[i]) {
        return value;
      }
    }
  });

  //function to copy text 
  function myFunction() {

    // var copyText = document.getElementById("exampleFormControlTextarea1");
    // copyText.select();
    // document.execCommand("copy");

//naive way to copy text
   navigator.clipboard.writeText(text)
   props.copyBtn(text);
  }

  //function to clearText
  var clearMe =()=>{
    setText("");
    props.clearBtn();
  }

  return (
    <>
      <div className="container" >
        <h2 className="mt-4">Enter the Text to Analyse! </h2>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label"
          ></label>
          <textarea
            className="form-control mb-4"
            style={props.addStyle}
            id="exampleFormControlTextarea1"
            rows="3"
            value={text}
            onChange={func1}
          ></textarea>
          <button disabled={(text===text.toUpperCase())} className="btn btn-primary my-1 mx-1 " onClick={func2}>
            UpperCase
          </button>
          <button disabled={(text===text.toLowerCase())} className="btn btn-primary my-1 mx-1" onClick={func3}>
            LowerCase
          </button>
          <button disabled={text===""} className="btn btn-primary my-1 mx-1" onClick={myFunction}>
           Copy Text
          </button>

          <button disabled={text===""} className="btn btn-primary mx-1 my-1" onClick={clearMe}>
           Clear Text
          </button>
          
          </div>

{/* code for displaying summary */}

        
        <div className="container ">
          <ul type="circle" className="mt-4">
            <li>
              Number of Words : <b>{wordValue}</b>
            </li>
            <li>
              Number of Charecters : <b>{charValue}</b>
            </li>
            <li>
              Charecters :
              {charValue === 0 || spValue.length === 0 ? (
                <b> No Charecters Present</b>
              ) : (
                <b> {spValue}</b>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
