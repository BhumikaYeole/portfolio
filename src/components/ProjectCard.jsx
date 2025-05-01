import React from 'react'
import "./ProjectCard.css"
import { FaGithub , FaHtml5 , FaCss3Alt, FaJava, FaReact, FaBootstrap, FaPython} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { BsFiletypeJson } from "react-icons/bs";

function ProjectCard() {
    return (
        <div className='project' id = "projects">
        <h3 className='head'>Projects</h3>
            <div className="pcard-container">

            <div className="pcard">
                    <div className="face face1">
                        <div className="content">
                            <img src="proj1.png" alt="" />
                            <h3>College Clubs Website</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                        <p>A web-based digital platform designed to manage and showcase various student clubs, allowing members to join, track events, share updates, and foster community engagement within the campus.
                        </p>
                        
                        <ul className="tech-stack">
                            <p>Tech Stack:</p>
                            <a ><FaHtml5 className='git-icon'/></a>
                            <a ><FaBootstrap className='git-icon'/></a>
                            <a ><SiJavascript className='git-icon'/></a>
                        </ul>
                         
                        </div>
                    </div>
                </div>

                <div className="pcard">
                    <div className="face face1">
                        <div className="content">
                            <img src="bank.png" alt="" />
                            <h3>Virtual Banking System</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p>A desktop application that simulates basic banking operations like account creation, deposits, withdrawals, and balance inquiries through an intuitive graphical interface.</p>
                             <ul className="tech-stack">
                            <p>Tech Stack:</p>
                            <a ><FaJava className='git-icon'/></a>
                            <a ><DiMysql className='git-icon'/></a>
                            
                        </ul>
                        </div>
                    </div>
                </div>

                <div className="pcard">
                    <div className="face face1">
                        <div className="content">
                            <img src="project.png" alt="" />
                            <h3>Personal Portfolio Website</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p>Showcases my skills, projects, and experience through an interactive, visually appealing web interface. </p>
                            <ul className="tech-stack">
                            <p>Tech Stack:</p>
                            <a ><FaHtml5 className='git-icon'/></a>
                            <a ><FaCss3Alt className='git-icon'/></a>
                            <a ><FaReact className='git-icon'/></a>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className="pcard">
                    <div className="face face1">
                        <div className="content">
                            <img src="proj3.png" alt="" />
                            <h3>Typing Speed Test - GUI</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p>A GUI based project and a desktop application that measures a user's typing speed and accuracy through an interactive and user-friendly interface.</p>
                            <ul className="tech-stack">
                            <p>Tech Stack:</p>
                            <a ><FaJava className='git-icon'/></a>
                            <a ><DiMysql className='git-icon'/></a>
                            
                        </ul>
                        </div>
                    </div>
                </div>
                
                <div className="pcard">
                    <div className="face face1">
                        <div className="content">
                            <img src="proj2.png" alt="" />
                            <h3>Online Quiz Application</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p>An interactive desktop application that allows users to answer multiple-choice questions and receive instant feedback on their performance.</p>
                        <ul className="tech-stack">
                            <p>Tech Stack:</p>
                            <a ><FaJava className='git-icon'/></a>
                            <a ><DiMysql className='git-icon'/></a>
                            <a ><BsFiletypeJson className='git-icon'/></a>
                        </ul>
                        </div>
                    </div>
                </div>
                
                <div className="pcard">
                    <div className="face face1">
                        <div className="content">
                            <img src="weather.png" alt="" />
                            <h3>Weather App - GUI</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                           <p>A desktop application that displays real-time weather information for selected locations using a simple and interactive graphical interface.</p>
                            <ul className="tech-stack">
                            <p>Tech Stack:</p>
                            <a ><FaPython className='git-icon'/></a>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard