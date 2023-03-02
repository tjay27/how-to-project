import React,{useRef} from "react";
import Button from "@mui/material/Button";
import { TextField, Typography } from "@mui/material";
import {Form , Card} from 'react-bootstrap';
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import LoginPlanet from "../Images/LoginPlanet.png"
import { UserAuth } from "../Firebase/AuthContext";
import useAuthState from "../Firebase/hooks";
import { auth } from "../Firebase/firebase";
import Navbar from "../Elements/Navbar";
import Login from '../Images/Login.png'
import {GoogleButton } from 'react-google-button'
import './contribute.css';



function LoginPage() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [error,setError]=useState('');
  const { createUser } = UserAuth();
  const {User,logOut} = UserAuth()
  const {user,initializing} = useAuthState(auth);
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

  const {googleSignIn} = UserAuth();
  const handleGoogleSignIn = async () =>{
        try{
         await googleSignIn()
         navigate("/feed")
        }catch(error){
            console.log(error);
        }
      }
      if(initializing){
        return("loading...");
      }

  return (
    <>
    <Navbar/>
    <div className="loginpage">

    <div className="ver-line">
      <img className="loginPlanet"  src={LoginPlanet} alt="mainImg" />
      <div className="vert-line">
        <div className="form-container">
        <Typography variant="h4" color={"white"} align="center">Welcome !</Typography>
        <img class="loginImg" src={Login} alt="" />
        <TextField id="Email" fullWidth></TextField>
        <TextField id="Password" fullWidth sx={{color:"white"}}></TextField>
          <Button  variant="contained"
          align="center"
          color="secondary"
          sx={{ marginTop: "20px" ,width:"400px"}}
          type="submit"> Sign up</Button>

        <div className="Google-Button">  
              <Typography variant="h6" sx={{marginTop:3,color:"white"}}>Login as Admin ?</Typography>  
              <GoogleButton  onClick={handleGoogleSignIn}/>
        </div>


        </div>
      </div>

      
    </div> 

    </div> 
    </>
  );
}

export default LoginPage;
