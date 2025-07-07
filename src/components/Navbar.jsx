import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from "react-scroll"
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

function Navbar() {
  const [visible, setVisible ] = useState(false)
  const handleClick = () =>
  {
      setVisible(!visible);
  }

  return (
    <div className="navbar-container">
      <div className='navbar'>
        <p className='name'><Link to='main' spy={true} smooth={true} duration={500} >BhumikaYeole</Link></p>
        <div>
          <ul className='navbar-items'>
            <li><Link to='about' spy={true} smooth={true} duration={500} offset={-10}>About Me</Link></li>
            <li><Link to='education' spy={true} smooth={true} duration={500} offset={-10}>Education</Link></li>
            <li><Link to='skills' spy={true} smooth={true} duration={500} offset={-10}>Skills</Link></li>
            <li><Link to='projects' spy={true} smooth={true} duration={500} offset={-10}>Projects</Link></li>
            <li><Link to='contact' spy={true} smooth={true} duration={500} offset={-10}>Contact</Link></li>
           
          </ul>
        </div>
        <div className='navbar-respo'>
            <button onClick={handleClick}><GiHamburgerMenu /></button>
            <div className = {visible ? 'items-respo' : 'items-hidden'}>
              <button onClick={handleClick} > <ImCross className='cross-btn'/></button>
              <ul className='list-respo'>
                <li><Link to='about' spy={true} smooth={true} duration={500} offset={-10}>About Me</Link></li>
                <li><Link to='education' spy={true} smooth={true} duration={500} offset={-10}>Education</Link></li>
                <li><Link to='skills' spy={true} smooth={true} duration={500} offset={-10}>Skills</Link></li>
                <li><Link to='projects' spy={true} smooth={true} duration={500} offset={-10}>Projects</Link></li>
                <li><Link to='contact' spy={true} smooth={true} duration={500} offset={-10}>Contact</Link></li>
              </ul>
            </div>
        </div>
      </div>
      <hr className='nav-row' />
    </div>
  )
}

export default Navbar
