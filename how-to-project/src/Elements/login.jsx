import React, { useState } from "react"
import Fab from "@mui/material/Fab";
import { Button } from "@mui/material";
import Login from '../Images/Login.png'
import {GoogleButton } from 'react-google-button'
import { UserAuth } from '../Firebase/AuthContext';
import useAuthState from "../Firebase/hooks";
import { auth } from "../Firebase/firebase";
import PopUp from "./PopUp";

function LoginIcon(){
    const {User,logOut} = UserAuth()
    const {user,initializing} = useAuthState(auth);
    const [openLogin, setOpenLogin] = useState(false);
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
        <Fab
        color="secondary"
        aria-label="Profile"
        onClick={() => setOpenLogin(true)}
        sx={{
          position: "absolute",
          display: "inline-block",
          right: "100px",
          top: "35px",
          color: "rgb(198, 154, 246)",
          bgColor: "transparent",
          width: "48px",
          height: "48px",
        }}
        class="profile-icon"
      >
        <i class=" fa-3x fas fa-user-circle"></i>
      </Fab>
      

      {/* <PopUp
        trigger={openLogin}
        setTrigger={setOpenLogin}
        title="My Account"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam in sapien elementum ipsum molestie dictum sit amet eu
                    lorem."
        
      >
        <img class="loginImg" src={Login} alt="" />
        <div > */}
      {user
      ?    <PopUp
      trigger={openLogin}
      setTrigger={setOpenLogin}
      title="My Account"
      content="Welcome. You can write your own technical blogs, research papers or articles for others to read. Have fun writing and browsing through some super cool technical stuff."
      
    >

      <img class="loginImg" src={Login} alt="" />
         <div>
            <p>{user.displayName}</p>  
                <Button  variant="contained"
          color="secondary"
          sx={{ marginTop: "20px" }} onClick={handleSignOut}>LOGOUT</Button>

          </div>
          </PopUp>

          :  <PopUp
          trigger={openLogin}
          setTrigger={setOpenLogin}
          title="Welcome!"
          content="Hello User, login to your account for writing your own technical stuff and accessing various other features like commenting, discussing and saving blogs or articles."
          
        >
          <img class="loginImg" src={Login} alt="" />
            <div className="Google-Button">    <GoogleButton  
           onClick={handleGoogleSignIn}/>
          </div>
          </PopUp>
        }
      {/* </div>

      </PopUp> */}
      </>
    ) 
}

export default LoginIcon;