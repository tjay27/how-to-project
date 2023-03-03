import { Box, TextField, Typography } from "@mui/material";
import { Timestamp,collection, addDoc } from "firebase/firestore";
import React ,{useState} from "react";
import {auth, db } from "../Firebase/firebase";
import useAuthState from "../Firebase/hooks";
import { Link, useNavigate } from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from "@mui/material";
import './contribute.css';
import Navbar from "../Elements/Navbar";
import SearchImage from "./SearchImage";


export default function Contribute(){
    const {user} = useAuthState(auth);
     /********for adding new blog link ***********/

     const [multiformValue,setMultiformValue]=useState({
      Topic:"",
      Title:"",
      link:"",
      imgURL:"",
      category:"",
      comments:[],
      description:""
     })

     const {Topic,Title,link,imgURL,category,comments,description}= multiformValue;

  /*********For setting up pages ********/

  const [activeStep,setActiveStep]=useState(0)
  const handleNext=()=>{
    setActiveStep((nextStep) => nextStep+1)
  }
  const handleBack=()=>{
    setActiveStep((prevStep) => prevStep-1)
  }


  const bloglist=collection(db,'Admin');

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
          link,
          description,
          imgURL,
          author:{name:auth.currentUser.displayName,id:auth.currentUser.uid},
          category,
          comments:[],
          status:false,
          tags: [Title.toLocaleLowerCase(), Topic.toLocaleLowerCase()],

      }).then(()=>{alert("success!!")}).catch(err=>{alert(err.message)});


  
  /**adding in users collection********/
  const reportRef=collection(db,"users",user.email,"My submission");

  await addDoc(reportRef,{
    Title,
    Topic,
    link,
    description,
    imgURL,
    author:{name:auth.currentUser.displayName,id:auth.currentUser.uid},
    category,
    comments:[],
    status:false,
    tags: [Title.toLocaleLowerCase(), Topic.toLocaleLowerCase()],

}).catch(err=>{alert(err.message)});
  }
      navigate("/feed")
  };


    return(
      <div>
        {activeStep === 0 && (

<div class="publishPost">
<Navbar/>
<Box sx={{
"& .MuiTextField-root": { m: 1 , width:"150ch" },
marginLeft:3, marginTop:5, color: "white"
}}>
    <Typography variant="h3" align="center">CONTRIBUTE </Typography>
    <TextField 
    fullWidth label="Title" 
    id="Title" 
    margin="20px"  
    sx={{margin:2}}
    value={multiformValue.Title} 
    onChange={(e)=>{setMultiformValue({...multiformValue,Title:(e.target.value)})
    }}
    required/>


    <TextField 
    fullWidth label="Field of Study" 
    id="Topic" 
    margin="20px" 
    value={multiformValue.Topic} 
    onChange={(e)=>{setMultiformValue({...multiformValue,Topic:(e.target.value)})
    }}
    sx={{margin:2}}
    required/>

   <TextField 
    fullWidth label="Description" 
    multiline
    rows={4}
    id="Description" 
    margin="20px" 
    value={multiformValue.description} 
    onChange={(e)=>{setMultiformValue({...multiformValue,description:(e.target.value)})
    }}           
    sx={{margin:2}}
    required/>

   <TextField 
    fullWidth label="Link (optional)" 
    id="Link" 
    margin="20px"  
    value={multiformValue.link}
    onChange={(e)=>{setMultiformValue({...multiformValue, link : e.target.value})
    }}    
    sx={{margin:2}}
    />

<FormControl  sx={{margin:2}}>
<FormLabel id="demo-row-radio-buttons-group-label">Choose Category</FormLabel>
<RadioGroup
row
aria-labelledby="demo-row-radio-buttons-group-label"
name="row-radio-buttons-group"
>
<FormControlLabel control={<Radio />} label="Research Paper" value={multiformValue.category}
                                onChange={(e)=>{setMultiformValue({...multiformValue,category:("Research Paper")})
                                }} />
<FormControlLabel control={<Radio />} label="Blogs" value={multiformValue.category}
                                onChange={(e)=>{setMultiformValue({...multiformValue,category:("Blogs")})
                                }}/>
<FormControlLabel control={<Radio />} label="Technical Stuff" value={multiformValue.category}
                                onChange={(e)=>{setMultiformValue({...multiformValue,category:("Technical Stuff")})
                                }}/>

</RadioGroup>
</FormControl><br/>
</Box>
<Button variant="contained" color="secondary" sx={{ marginTop: "20px" , marginLeft:75 }} onClick={handleNext}>
  Next
</Button>
</div>

        )}


        {activeStep === 1 && (
          <>
          <SearchImage multiformValue={multiformValue} setMultiformValue={setMultiformValue} handleSubmit={handleSubmit}/>
          <Button variant="contained" color="secondary" sx={{ marginTop: "20px" , marginLeft:75 }} onClick={handleBack}>
          Back
        </Button>
        </>
        )}



      </div>
 
    )}         