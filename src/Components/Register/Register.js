import axios from 'axios';
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import '../Register/Register.css'
import '../Login/Login';
const Register = () => {

  const history = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    reEnterpassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }
  const register = () => {
    const { name, email, password, reEnterpassword } = user
    if (name && email && password && (password === reEnterpassword)) {

      axios.post("http://localhost:9200/register", user)
        .then(res => {
          alert(res.data.message)
         history('/login')
        })
  }
  else {
    alert("invalid input")
}

}


return (
  <div className='register'>
    <h1>Register</h1>
    <input type="text" name="name" value={user.name} placeholder=' your Name' onChange={handleChange}></input>
    <input type="text" name="email" value={user.email} placeholder=' your Email' onChange={handleChange}></input>
    <input type="password" name="password" value={user.password} placeholder=' your password' onChange={handleChange}></input>
    <input type="password" name="reEnterpassword" value={user.reEnterpassword} placeholder='Re Enter your password' onChange={handleChange}></input>
    <div className="button" onClick={register}>Register Login</div>
    <div>or</div>
    <div className="button" onClick={() => history('/login')}>Login</div>
  </div>
)
}

export default Register