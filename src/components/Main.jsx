import "./Main.css"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import React from 'react'

function Main() {
  return (
    <div className="main-container">

      <div className="main">
        <p>Hi, 👋 ! <br /> I'm Bhumika Yeole,<br />a Web Developer :)</p>
        <div className="text-container">
          <h3 className="text">I love crafting <strong >SMOOTH</strong> web experiences!</h3>
        </div>
      </div>
      <div className="img-container">
      <div class="wrapper">
    <div class="left-border"></div>
    <div class="right-border"></div>
        <img src="mypfp.jpg" className="tp custom-border" alt="" />
        </div>
        <div className="socials">
            <a className="button"  href="https://www.linkedin.com/in/bhumika-yeole-18a81734b" target="blank" ><FaLinkedin className="social-logo" />  </a>
            <a className="button" href="https://github.com/BhumikaYeole" target="blank"><FaGithub className="social-logo" />  </a>
            <a className="button" href="" target="blank"><FaInstagram className="social-logo"/>  </a>
            <a className="button" href="mailto:yeolebhumika@gmail.com" ><MdEmail className="social-logo" />  </a>
          </div>

      </div>
    </div>
  )
}

export default Main