import './App.css';
import Home from './Components/Home/Home';
import Login from'./Components/Login/Login';
import Register from './Components/Register/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';


function App() {
  const [ user,setLoginUser] = useState({})
  return (
    <>
    <Navbar />
    <div className='App'>
      {/* <Router>
        <Routes>
          <Route path='/' element=
          {
            user && user._id ? <Home setLoginUser ={setLoginUser} /> :<Login setLoginUser={setLoginUser} />
          } />
          <Route path='/login' 
          element={<Login setLoginUser={setLoginUser} />} />
          <Route path='/register' 
          element={<Register />} />
        </Routes>
      </Router> */}
    </div>
    
    </>
  );
}

export default App;
