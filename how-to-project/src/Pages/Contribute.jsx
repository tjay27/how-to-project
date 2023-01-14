import { Box, TextField, Typography } from "@mui/material";
import { Timestamp,collection, addDoc } from "firebase/firestore";
import React ,{useState} from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../Firebase/firebase";
import {auth, db } from "../Firebase/firebase";
import useAuthState from "../Firebase/hooks";
import { useNavigate } from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


export default function Contribute(){
    const {user} = useAuthState(auth);
     /********for adding new blog link ***********/
  const [Topic,setTopic]=useState("");
  const [Title,setTitle]=useState("");
  const [Link,setLink]=useState("");
  const [imgURL,setImgURL]=useState("");
  const [category,setCat]=useState("");


  const [description,setDescription]=useState("");

  const bloglist=collection(db,'Blogs');
  
  let navigate = useNavigate();
  const handleSubmit=async (e)=>{ 
      e.preventDefault();
      if(Title===""||Topic===""||description===""){
        alert("Fill all the fields");
        return false;
      }else{
        
          await addDoc(bloglist,{
          Title,
          Topic,
          Link,
          description,
          imgURL,
          author:{name:auth.currentUser.displayName,id:auth.currentUser.uid},
          category,
      }).then(()=>{alert("success!!")}).catch(err=>{alert(err.message)});

      setTitle("")
      setTopic("")
      setDescription("")
      setLink("")
      setImgURL("")
      setCat("")
  navigate("/feed");

        
      }
      
  };


    return(
       <div>
        <Box sx={{
        
        backgroundColor: "yellow",
        marginLeft:3
      }}>
            <Typography>CONTRIBUTE </Typography>
            <TextField 
            fullWidth label="Title" 
            id="Title" 
            margin="20px"  
            onChange={(e)=>{setTitle(e.target.value)}}
            required/>


            <TextField 
            fullWidth label="Topic" 
            id="Topic" 
            margin="20px"  
            onChange={(e)=>{setTopic(e.target.value)}}
            required/>

<TextField 
            fullWidth label="Description" 
            multiline
            rows={4}
            id="Description" 
            margin="20px"  
            onChange={(e)=>{setDescription(e.target.value)}}
            required/>

<TextField 
            fullWidth label="Link (optional)" 
            id="Link" 
            margin="20px"  
            onChange={(e)=>{setLink(e.target.value)}}
            />
            <TextField 
            fullWidth label="Image" 
            id="Image" 
            margin="20px"  
            onChange={(e)=>{setImgURL(e.target.value)}}
            required/>

<FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Choose Category</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Research Paper" onChange={(e)=>{setCat("Research paper")}} />
        <FormControlLabel value="male" control={<Radio />} label="Blogs" onChange={(e)=>{setCat("Blogs")}}/>
        <FormControlLabel value="other" control={<Radio />} label="Technical Stuff" onChange={(e)=>{setCat("Technical Stuff")}}/>
        
      </RadioGroup>
    </FormControl>
          <button
            className="form-control btn-primary mt-2"
            onClick={handleSubmit}
          >
            Publish
          </button>

        </Box>
       </div>
    )}         