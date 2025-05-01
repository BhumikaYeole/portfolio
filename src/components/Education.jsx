import React from 'react'
import "./Education.css"
import { GoDotFill } from "react-icons/go";

function Education() {
  return (
    <>
      <div className="edu-container" id='education'>
        <h1>MY EDUCATION THROUGH THE YEARS.</h1>
        <div className="educard-container">

          {/* <div className="images">
            <img src="logo.png" alt="" />
            <img src="logo2.jpg" alt="" />
            <img src="logo3.gif" alt="" />
          </div> */}
          {/* <div className="deco">
            <GoDotFill className='dot' />
            <div className="v-line"></div>
            <GoDotFill className='dot' />
            <div className="v-line"></div>
            <GoDotFill className='dot' />
            <div className="v-line"></div>
          </div> */}
          <div className="cards">
            <div className="educard">

              <p className="info">
                <h2 className="clg"> Smt. Indira Gandhi Clg of Engineering (2023 - 2027)</h2>
                <p className='details'><GoDotFill/>  SECOND YEAR ENGINEER <br /><GoDotFill/> CGPA : 9.75 (till sem 3) <br /><GoDotFill/> PARTICIPATED IN BOOTCAMPS, HACKATHONS</p>
              </p>
            </div>
            <div className="educard">
            
            <p className="info">
                <h2 className="clg">Model College - Dombivli (2021 - 2023)</h2>
                <p className='details'><GoDotFill/>  HSC - BIFOCAL (COMPUTER SCIENCE) <br /><GoDotFill/> PERCENTAGE : 86.50% <br /><GoDotFill/> TOP 10 IN COLLEGE</p>
              </p>
            </div>
            <div className="educard">
            
            <p className="info">
                <h2 className="clg">Don Bosco High School (2010 - 2021)</h2>
                <p className='details'><GoDotFill/>  SECONDARY SCHOOL CERTIFICATE <br /><GoDotFill/> PERCENTAGE : 92.60% <br /><GoDotFill/> ELECTED AS SCHOOL VICE CAPTAIN, INTERACT CLUB PRESIDENT</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Education