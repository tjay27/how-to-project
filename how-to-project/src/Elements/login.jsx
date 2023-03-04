import React, { useState } from "react"
import Fab from "@mui/material/Fab";
import { Button } from "@mui/material";
import Login from '../Images/Login.png'
import {GoogleButton } from 'react-google-button'
import { UserAuth } from '../Firebase/AuthContext';
import useAuthState from "../Firebase/hooks";
import { auth } from "../Firebase/firebase";
import TransitionModal from '../Elements/Modal';
import PopUp from "./PopUp";


function LoginIcon(){
    const {User,logOut} = UserAuth()
    const {user,initializing} = useAuthState(auth);
    const {googleSignIn} = UserAuth();
    const handleGoogleSignIn = async () =>{
          try{
           await googleSignIn()
          }catch(error){
              console.log(error);
          }
        }
        if(initializing){
          return("loading...");
        }
    const handleSignOut = async()=>{
      try{
        await logOut()
      }catch(error){
        console.log(error)
      }
    }
    return(
        <>
      {user
      ?<TransitionModal 
      title="Login"
      button={<a class="login-icon"><i class="fa-regular fa-4x fa-circle-user"></i></a>}
      content="Welcome. You can write your own technical blogs, research papers or articles for others to read.
       Have fun writing and browsing through some super cool technical stuff."
      >
        <img class="loginImg" src={Login} alt="" />
        <div>
          <p>{user.displayName}</p>  
          <Button  variant="contained"
          align="center"
          color="secondary"
          sx={{ marginTop: "20px" , marginLeft:"225px"}} onClick={handleSignOut}>LOGOUT</Button>

          </div>
      </TransitionModal>

          :<TransitionModal 
          title="Login"
          button={<a class="login-icon"><i class="fa-regular fa-3x fa-circle-user"></i></a>}
          content="Hello User, login to your account for writing your own technical stuff and accessing various other features like commenting, discussing and saving blogs or articles." 
          >
            <img class="loginImg" src={Login} alt="" />
            <div className="Google-Button">    
                <GoogleButton  onClick={handleGoogleSignIn}/>
            </div>
        </TransitionModal>

        }

      </>
    ) 
}

export default LoginIcon;