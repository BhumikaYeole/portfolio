import React from 'react'
import "./About.css"
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { LuBrainCircuit } from "react-icons/lu";
import { GrOptimize } from "react-icons/gr";

function About(){
    return (
        <>
            <div className="about-text" id='about'>
                
                <h1>About Me.</h1>
                <div className="extra">
                <p className='para'>I’m a Web Developer passionate about designing smooth, user-friendly web experiences.
                    From building responsive interfaces to optimizing performance, I bring ideas to life with clean, efficient code.
                    I thrive on Data Structures & Algorithms (DSA), where every challenge is like solving a puzzle.
                    Whether it's optimizing an application’s performance or cracking a tricky algorithmic problem,
                    I enjoy the thrill of logical thinking and continuous learning.
                </p>
                <img src="persongif.jpg" alt="" />
                </div>
                <h1 className='wid'>What I Do?</h1>
                <div className="card-container">
                    <div className="card">
                        <LiaLaptopCodeSolid className='logo' /> 
                        <h2>Web Development</h2>
                        <p>Crafting modern, dynamic websites & applications.</p>
                    </div>
                    <div className="card">
                        <LuBrainCircuit className='logo' />
                        <h2>Problem-Solving</h2>
                        <p>Breaking down complex challenges into efficient solutions.</p>
                    </div>
                    <div className="card">
                        <GrOptimize className='logo' />
                        <h2>Optimization</h2>
                        <p>Ensuring fast, seamless user experiences.</p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default About