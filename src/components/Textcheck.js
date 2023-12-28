import React, {useState} from 'react'

export default function Textcheck(props) {
  const[text, setText]=useState("Hit me here")
  
 

  let func1=(e)=>{
setText(e.target.value);
  }
  let func2=()=>{
let upcasevalue = text.toUpperCase();
setText(upcasevalue);
props.upCase();
  }
  let func3 = ()=>{
let LocaseValue = text.toLowerCase();
setText(LocaseValue);
props.loCase();
  }


  let charValue = text.replaceAll(" ", "").length;

  if(charValue===0){
    var wordValue = 0;
  }
  else{
    var removeTrialSpace = text.trimEnd();
    wordValue = removeTrialSpace.split(" ").length;
  }

  let SpCh = ["!","@","#","$","%","^","&","*"];
  
let texArr = Array.from(text);
 

let spValue = texArr.filter((value)=>{
  for(let i =0;i<=SpCh.length;i++){
    if(value===SpCh[i]){
      return value;
    }
  }
})

  
  

  
  
 

 
  
  




  return (
    <>
    <div className='container' >
    <h2 className="my-3">Enter the Text to Analyse! </h2>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control" style={props.addStyle} id="exampleFormControlTextarea1" rows="3" value={text} onChange={func1}></textarea>
<button className="btn btn-primary my-4" onClick={func2} >UpperCase</button>
<button className="btn btn-primary my-4 mx-3" onClick={func3} >LowerCase</button>
</div>
<div className='container'>

      <ul type="circle">
        <li >
        Number of Words : <b>{wordValue}</b>
      </li>
      <li>
      Number of Charecters : <b>{charValue}</b>
      </li>
      <li>
        Charecters : {(charValue===0 ||spValue.length===0 )? <b>No Charecters Present</b>: <b>{spValue}</b>}
      </li>
      </ul>
      </div>
    </div>
    </>
  )
}


