import React from 'react'
import "./Skills.css"
import { GoDotFill } from "react-icons/go";
import Card from "./Card"


function Skills() {
   return (
      <>
      <div className='skill-container' id= "skills">
         <h1>Skills</h1>
         <h3><GoDotFill/>Programming Languages</h3>
         <ul className="icon-box">
            <Card name = {'JAVA'} img = {'https://cdn-icons-png.flaticon.com/512/226/226777.png'} details = {'1 year,5 projects'} progress = {'70.jpg'}/>
            <Card name = {'PYTHON'} img = {'https://img.icons8.com/color/512/python.png'} details = {'1 year,4 projects'}  progress = {'70.jpg'}/>
            <Card name={'C'} img = {'C_Logo.png'} details = {'3 years'} progress = {'70.jpg'}/>
            <Card name = {'C++'} img = {'Cpp.png'} details = {'5 years '} progress = {'70.jpg'}/>
            <Card name = {'JAVASCRIPT'} img = {'https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png'} details = {'2 years,5 projects'}  progress = {'70.jpg'}/>
            
         </ul>

         <h3><GoDotFill/>Web Development Tools</h3>
         <ul className="icon-box">
         <Card name={'HTML'} img = {'https://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png'} details = {'3 years, 3 projects'} progress = {'70.jpg'}/>
         <Card name = {'CSS'} img = {'https://img.icons8.com/fluent/512/css3.png'} details = {'3 years,3 projects'} progress = {'70.jpg'}/>
         <Card name = {'REACT'} img = {'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'} details = {'1 year,2 projects'} progress = {'70.jpg'}/>
         <Card name = {'BOOTSTRAP'} img = {'https://e7.pngegg.com/pngimages/439/345/png-clipart-bootstrap-logo-thumbnail-tech-companies-thumbnail.png'} details = {'1 year,1 project'} progress = {'70.jpg'}/>
         <Card name = {'TAILWIND'} img = {'https://img.icons8.com/color/512w/tailwind_css.png'} details = {'1 year,2 projects'} progress = {'70.jpg'}/>
         </ul>

         <h3><GoDotFill/>Database Management </h3>
         <ul className="icon-box">
         <Card name = {'MySQL'} img = {'https://cdn-icons-png.flaticon.com/512/5968/5968363.png'} details = {'2 years,5 projects'} progress = {'70.jpg'}/>
         <Card name = {'MongoDB'} img = {'https://companieslogo.com/img/orig/MDB.D-9b200438.png?t=1720244492'} details = {'1 year,1 project'} progress = {'70.jpg'}/>
         <Card name = {'FIREBASE'} img = {'https://brandeps.com/logo-download/F/Firebase-logo-02.png'} details = {'1 year,1 project'} progress = {'70.jpg'}/>
         
         </ul>

         <h3><GoDotFill/>Version Control</h3>
         <ul className="icon-box">
         <Card name = {'GIT'} img = {'https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-512.png'} details = {'1 year'} progress = {'70.jpg'}/>
         <Card name = {'GITHUB'} img = {'https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png'} details = {'1 year'} progress = {'70.jpg'}/>
         
         </ul>
         </div>
      </>
   )
}

export default Skills