import React, { useState } from "react";
import "./signup.css";
import { NavLink } from "react-router-dom";

function Signup() {
  const [inpVal, setInpVal] = useState({
    name: "",
    contact: "",
    email: "",
    password: "",
  });


  const getValue = (e) => {
    // console.log(e.target.value)
    const { value, name } = e.target;
    console.log(value, name);
    setInpVal(() => {
      return {
        ...inpVal,
        [name]: value,
      };
    });
  };
  const onSubmitHandler = async (e) => {
      e.preventDefault();
      const { name, contact, email, password } = inpVal;    
   const res = await fetch  (
      "https://smit-store-bb2cb-default-rtdb.firebaseio.com/userDataRecords.json",
      {
      method: "POST",
      Headers:{
        "content-type": "application/json",
      },
      body:JSON.stringify({
        name,
        contact,
        email,
        password
      }),
    },  
     setInpVal({
        name: "",
        contact: "",
        email: "",
        password: "",
     })
    );
    if (!name.trim()) {
      alert("Name field is required");
      return;
    }

    if (!contact.trim()) {
      alert("Contact field is required");
      return;
    }

    if (!email.trim()) {
      alert("Email field is required");
      return;
    }

    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email.trim())) {
      alert("Please enter a valid email address");
      return;
    }

    if (!password.trim()) {
      alert("Password field is required");
      return;
    }

    if (password.trim().length < 8) {
      alert("Password must contain at least 8 characters");
      return;
    }

    if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
        password.trim()
      )
    ) {
      alert(
        "Password must contain at least one letter, one number, and one special character"
      );
      return;
    }
    if (res) {
        setInpVal({
            name: "",
            contact: "",
            email: "",
            password: "",
          });
        alert("Data saved successfully");

    } else {
        alert("Error")
    }
  };

  return (
    <>
      <div className="container">
        <div className="content sign-up-content">
          <h1>SAYLANI WELFARE</h1>
          <h5>ONLINE DISCOUNT STORE</h5>
        </div>
        <div className="signup-form">
          <form action="#" method="POST">
            <div className="inputs">
              <input
                onChange={getValue}
                name="name"
                type={"text"}
                placeholder="Full Name"
              />
              <input
                onChange={getValue}
                name="contact"
                type={"tel"}
                placeholder="Contact"
              />
              <input
                onChange={getValue}
                name="email"
                type={"email"}
                placeholder="Email"
              />
              <input
                onChange={getValue}
                name="password"
                type={"password"}
                placeholder="Password"
              />
            </div>
            <div className="submit">
              <button onClick={onSubmitHandler} type="submit">
                Sign Up
              </button>
              <p>
                Already have an account? <span><NavLink to='/signin'>Login</NavLink></span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
