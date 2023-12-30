import React from 'react'
import PropTypes from 'prop-types'





export default function Navbar(props) {
  return (
    <>
    <nav  className={`navbar navbar-expand-lg navbar-${props.modeValue} bg-${props.modeValue}`} >
 <div className="container-fluid">
   <a className="navbar-brand" href="#">{props.title}</a>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="navbarScroll">
     <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
       <li className="nav-item">
         <a className="nav-link " aria-current="page" href="#">Home</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#">{props.about}</a>
       </li>
       <li className="nav-item dropdown">
         
         <ul className="dropdown-menu">
           <li><a className="dropdown-item" href="/">Action</a></li>
           <li><a className="dropdown-item" href="/">Another action</a></li>
           <li><hr className="dropdown-divider" /></li>
           <li><a className="dropdown-item" href="/">Something else here</a></li>
         </ul>
       </li>
       
     </ul>
     <div className={`form-check form-switch text-${(props.modeValue==="dark")?"light":"dark"}`}>
  <input className="form-check-input" onClick={props.takefunc} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label"  htmlFor="flexSwitchCheckDefault" >Enable Dark Mode</label>
</div>
   </div>
 </div>
</nav>
   </>
  )
}



