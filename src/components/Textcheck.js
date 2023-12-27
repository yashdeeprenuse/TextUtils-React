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
  
  




  return (
    <>
    <div className='container' >
    <h2 className="my-3">Enter the Text below</h2>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control" style={props.addStyle} id="exampleFormControlTextarea1" rows="3" value={text} onChange={func1}></textarea>
<button className="btn btn-primary my-4" onClick={func2} >UpperCase</button>
<button className="btn btn-primary my-4 mx-3" onClick={func3} >LowerCase</button>

</div>
    </div>
    </>
  )
}
