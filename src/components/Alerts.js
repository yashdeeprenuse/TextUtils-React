import React from 'react'

export default function Alerts(props) {
  
  return (
    <>
    
<div style={{height:"50px"}} >


    {props.alert && <div className="alert alert-success" role="alert">
    {props.alert.type} : {props.alert.message}
    </div>}

  </div>

    
    </>
    
  )
}
