import React from 'react'
import "./Navbar.css"
import { Link } from "react-scroll"

function Navbar() {
  return (
    <div className="navbar-container">
      <div className='navbar'>
        <p className='name'><img src="BY.png" alt="" className="by" />BhumikaYeole</p>
        <div>
          <ul className='navbar-items'>
            <li><Link to='about' spy={true} smooth={true} duration={500} offset={-10}>About Me</Link></li>
            <li><Link to='education' spy={true} smooth={true} duration={500} offset={-10}>Education</Link></li>
            <li><Link to='skills' spy={true} smooth={true} duration={500} offset={-10}>Skills</Link></li>
            <li><Link to='projects' spy={true} smooth={true} duration={500} offset={-10}>Projects</Link></li>
            <li><Link to='contact' spy={true} smooth={true} duration={500} offset={-10}>Contact</Link></li>
           
          </ul>
        </div>
      </div>
      <hr className='nav-row' />
    </div>
  )
}

export default Navbar
