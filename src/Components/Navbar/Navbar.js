import React from 'react'
import { FaFacebookSquare,FaInstagramSquare,FaYoutubeSquare } from "react-icons/fa";
import './Navbar.css'

const Navbar = () => {
  return (
<>

<nav className='main-nav'>
<div className='logo'>
<h2>
    <span>M</span>ill
    <span>O</span> Technical
</h2>
</div>
{/* menu list part */}
<div className="menu-link">
    <ul>
        <li>
            <a href="#">Home</a>
        </li>
        <li>
            <a href="#">Home</a>
        </li>
        <li>
            <a href="#">Home</a>
        </li>
        <li>
            <a href="#">Home</a>
        </li>
    </ul>
</div>
{/* social media icons */}
<div className="social-media">
<ul className="social-media-desktop">
<li>
    <a href="#"><FaFacebookSquare className='facebook'/></a>
</li>
<li>
    <a href="#"><FaInstagramSquare /></a>
</li>
<li>
    <a href="#"><FaYoutubeSquare /></a>
</li>
</ul>
</div>
</nav>
</>

  )
}

export default Navbar