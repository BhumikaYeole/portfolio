import './components/Navbar.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import About from './components/About'
import {useState} from "react"
import Education from './components/Education'
import ProjectCard from "./components/ProjectCard"
import Skills from "./components/Skills"
import ContactPage from "./components/ContactPage"

// import {Routes, Route,} from "react-dom"

function App()
{
  
  let [scroll,setScroll] = useState(false)


    window.addEventListener("scroll",
      ()=>
      {
        if(window.scrollY > 50)
        {
          setScroll(!scroll)
        }
      }
    )
  

  return (
    <>
      <Navbar scroll={scroll}/>
      <Main/>
      <About/> 
      <Education/>
      <Skills/>
      <ProjectCard/>
      <ContactPage/>
    </>
  )
}

export default App
