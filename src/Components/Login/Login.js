import axios from 'axios';
import React, { useState } from 'react'
import '../Login/Login.css'
import {  Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login({ setLoginUser }) {

  const history = useNavigate();
  const diffToast = () =>{
    toast.success("Wow so easy!",{
      theme:"colored"
    })
  }

  const [user,setUser] = useState({
    email:'',
    password:'',
  });
  
  const handleChange = (e) =>{
    const {name,value}= e.target
    setUser({
      ...user,
      [name]: value
    })
  }
  const login = () =>{
    axios.post("http://localhost:9200/login", user)
    .then(res =>{
     alert(res.data.message)
     setLoginUser(res.data.user)
     history('/')
    })
  }

  const config = {
    headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1pbGxpbyIsInBhc3N3b3JkIjoibWlsbGlvQDEyMyIsImlhdCI6MTY2OTEzOTE1MCwiZXhwIjoxNjY5MTQyNzUwfQ.nWPbaoh9eZW2MT1SzNvw4ntKs4XBKnF7uphpbQcd-LI` }
  };
  const getAllItems = () =>{
    axios.get("http://localhost:9400/gtalitms", config)
    .then(res =>{
      console.log(res.data);
    })
  }
  

  return (
    
    <div className='login'>
    <h1>Login</h1>
    <input type="text" placeholder='Enter your Email' name='email' value={user.email} onChange={handleChange}></input>
    <input type="password" placeholder='Enter your password' name='password' value={user.password} onChange={handleChange}></input>
    <div className="button"onClick={() => {login();diffToast();}}>Login</div>
    <div>or</div>
    <div className="button" onClick={() => history('/register')}>Register</div>
    <div className="button"onClick={() => {getAllItems();}}>GetAllItems</div>
    <ToastContainer />
    </div>
  )
}

export default Login