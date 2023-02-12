import React from "react";
import Logo from "./.././../images/Logo.png";
import '../first screen/firstscreen.css'
import { NavLink } from "react-router-dom";

function FirstScreen() {
//     let navigate = useNavigate(); 
//     const routeChange = () =>{ 
//    navigate("/signup")
  

  return (
    <>
    <div className="container">
    <div className="logo">
      <img src={Logo} alt="logo" />
    </div>  
    <div className="content">
        <h1>SAYLANI WELFARE</h1>
        <h5>ONLINE DISCOUNT STORE</h5>
    </div>
    <div className="get-started">
        <button  type="submit"><NavLink to='/signup'>Get Started</NavLink></button>
    </div>
    </div>
    </>
  );
}

export default FirstScreen;
