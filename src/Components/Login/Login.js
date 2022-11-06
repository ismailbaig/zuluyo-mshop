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
    axios.post("http://localhost:9200/login",user)
    .then(res =>{
     alert(res.data.message)
     setLoginUser(res.data.user)
     history('/')
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
    <ToastContainer />
    </div>
  )
}

export default Login