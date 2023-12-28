import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textcheck from './components/Textcheck';
import React, { useState } from 'react'
import Alerts from './components/Alerts';





function App() {
  const [mode, setMode]=useState("light");
  const [alert, setAlertValue]=useState(null);

let showAlert = (setType,setMessage)=>{
setAlertValue({
  type:setType,
  message:setMessage
})
}

  const funcmode = ()=>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor= "black";
      document.body.style.color= "white";
     
      showAlert("Success","Dark Mode Set Successfully");
      setTimeout(()=>{
        setAlertValue(null)
        },1000)
       
      
    }
    else if(mode==="dark"){
      setMode("light")
      document.body.style.backgroundColor= "white";
      document.body.style.color= "black";
     
        showAlert("Success","Light Mode Set Successfully");
        setTimeout(()=>{
          setAlertValue(null)
          },1000)
      
    }
  }

  let changeStyle1 = {
    backgroundColor:"rgba(255, 255, 255, 0.55)",
    color:"white"
    
          }
    let changeStyle2 = {
            backgroundColor:"white",
            color:"black"
                  }     
    let alertForUpcase = ()=>{
      showAlert("Success","Text Was Converted to Upper Case");
      setTimeout(()=>{
        setAlertValue(null)
      },1000)
    }            
    let alertForLocase = ()=>{
      showAlert("Success","Text was Converted to Lower Case");

      setTimeout(()=>{
        setAlertValue(null)
      },1000)
    }

    

  return (
    <>  
    
<Navbar title="TextUtils" about="Our Journey" modeValue={mode} takefunc={funcmode}/>
<Alerts alert={alert} ></Alerts>
<Textcheck  upCase={alertForUpcase} loCase={alertForLocase} addStyle={(mode==="dark")? changeStyle1:changeStyle2}> </Textcheck>

    </>
  
  );
}

export default App;
