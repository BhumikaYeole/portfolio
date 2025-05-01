import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import emailjs from "@emailjs/browser";

const Contact = () => {

    const [name,setName] = useState("")
    const [mail,setMail] = useState("")
    const [msg, setMsg] = useState("")
    const [reply,setReply] = useState("")

    const handleSubmit = (event)=>
    {
        event.preventDefault()
        const data = {name, mail, msg}
        emailjs.send("service_123456", "template_xyz", data , "PM4ne-Ge2jT5c1KK_")
        .then(()=>
        {
            setName("")
            setMail("")
            setMsg("")
            setReply("Successfully sent!")
            setTimeout( ()=>setReply("") , 3000)
        })
        .catch((e)=>console.log(e))
    }





    return (
        <StyledWrapper>
            <form className="form" onSubmit={handleSubmit}>

                <div className="left">
                    <h2>Connect with me</h2>
                    <p>Always excited to connect with fellow creators and collaborators.</p>
                    <p>Find me on these platforms or drop me a message!</p>
                    <div className='social-icons'>
                        <a href="https://github.com/BhumikaYeole" >
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/bhumika-yeole-18a81734b">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:yeolebhumika@gmail.com">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
                <div className="right">
                    <h2>Contact Me</h2>

                    <div className="flex-column">
                        <label>Name</label>
                    </div>
                    <div className="inputForm">
                        <input placeholder="Enter your name" className="input" type="text" name='name' value={name} onChange={(event)=>setName(event.target.value)} />
                    </div>

                    <div className="flex-column">
                        <label>Email</label>
                    </div>
                    <div className="inputForm">
                        <input placeholder="Enter your email" className="input" type="email" name='mail' value={mail} onChange={(event)=>setMail(event.target.value)}/>
                    </div>

                    <div className="flex-column">
                        <label>Message</label>
                    </div>
                    <div className="inputForm">
                        <textarea placeholder="Enter your message" className="input textarea" rows="4" name='mail' value={msg} onChange={(event)=>setMsg(event.target.value)}/>
                    </div>

                    <button className="button-submit">Send Message</button>

                    <h2>{reply}</h2>

                </div>
            </form>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: row;
    gap: 10px;
    background: linear-gradient(45deg, red, yellow);
    padding: 30px;
    width: 1000px;
    border-radius: 20px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    transition: background 0.3s ease;
  }

  .form:hover {
    background: linear-gradient(45deg, yellow, red);
  }

  .left {
    width:500px;
    display: flex;
    flex-direction:column;
    gap:40px
  }

  .right {
    width:500px
  }

  .left p
  {
    font-size:20px;
    color:white;
  }

  .left h2
  {
    font-size:40px
  }

  .social-icons
  {
    font-size:50px;
    display: flex;
    justify-content:space-around;
    
  }

  h2 {
    text-align: center;
    color: black;
    margin-bottom: 10px;
  }

  ::placeholder {
    font-family: 'Poppins';
  }

  .form button {
    align-self: center;
  }

  .flex-column > label {
    color: #151717;
    font-weight: 600;
  }

  .inputForm {
    border: 1.5px solid #ecedec;
    border-radius: 10em;
    display: flex;
    align-items: center;
    padding: 0 10px;
    transition: 0.2s ease-in-out;
    background-color: white;
  }

  .input {
    border-radius: 10rem;
    border: none;
    width: 100%;
    height: 50px;
    padding: 0 10px;
    font-size:15px
  }

  .input.textarea {
    height: auto;
    border-radius: 20px;
    padding: 10px;
    resize: none;
  }

  .input:focus {
    outline: none;
  }

  .inputForm:focus-within {
    border: 1.5px solid #2d79f3;
  }

  .button-submit {
    position: relative;
    display: inline-block;
    padding: 15px 30px;
    text-align: center;
    letter-spacing: 1px;
    text-decoration: none;
    background: transparent;
    transition: ease-out 0.5s;
    border: 2px solid;
    border-radius: 10em;
    box-shadow: inset 0 0 0 0 red;
    margin: 20px 0 10px 0;
    color: white;
    font-size: 15px;
    font-weight: 500;
    height: 50px;
    width: 100%;
    cursor: pointer;
  }

  .button-submit:hover {
    color: white;
    box-shadow: inset 0 -100px 0 0 darkorange;
  }

  .button-submit:active {
    transform: scale(0.9);
  }
`;

export default Contact;
