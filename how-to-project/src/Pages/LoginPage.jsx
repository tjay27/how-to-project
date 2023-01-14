import React,{useRef} from "react";
import Img6 from "../Images/astronaut.png";
import Img2 from "../Images/7.png";
import Img5 from "../Images/earth.png";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import {Form , Card} from 'react-bootstrap';
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from "../Firebase/AuthContext";


function LoginPage() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [error,setError]=useState('');
  const { createUser } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit=async (e)=>{
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  }

  return (

    <>
      <img class="img6" src={Img6} alt="" />
      <img class="img5" src={Img5} alt="" />
<div className="form-container">
     <Card sx={{backgroundColor:"black"}}><Card.Body>
     
        <h2 className="text-center">Sign up</h2>
        < form onSubmit={handleSubmit}>
          <Form.Group id='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control onChange={(e)=>setEmail(e.target.value)} type='email' ref={emailRef} required/>
          </Form.Group>
          <Form.Group id='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={(e)=>setPassword(e.target.value)}  type='password' ref={passwordRef} required/>
          </Form.Group>
          
          <Button type="submit"  variant='contained' sx={{marginTop:3,width:"400px"}}>Sign Up</Button>
        </form>
        <div>
      Already have an account ? <span> Login</span>
     </div>
        
     
     </Card.Body></Card>
     </div>
     

      
      
    </>
 );
}

export default LoginPage;
