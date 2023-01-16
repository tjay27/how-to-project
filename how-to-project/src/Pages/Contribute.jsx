import { Box, TextField, Typography } from "@mui/material";
import { Timestamp,collection, addDoc } from "firebase/firestore";
import React ,{useState} from "react";
import {auth, db } from "../Firebase/firebase";
import useAuthState from "../Firebase/hooks";
import { useNavigate } from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from "@mui/material";
import Img6 from "../Images/astronaut.png";
import Img2 from "../Images/7.png";
import Img5 from "../Images/earth.png";
import './contribute.css';


export default function Contribute(){
    const {user} = useAuthState(auth);
     /********for adding new blog link ***********/
  const [Topic,setTopic]=useState("");
  const [Title,setTitle]=useState("");
  const [link,setLink]=useState("");
  const [imgURL,setImgURL]=useState("");
  const [category,setCat]=useState("");
  const [comments,setComment]=useState([]);


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
          link,
          description,
          imgURL,
          author:{name:auth.currentUser.displayName,id:auth.currentUser.uid},
          category,
          comments:[],
          tags: [Title.toLocaleLowerCase(), Topic.toLocaleLowerCase()],

      }).then(()=>{alert("success!!")}).catch(err=>{alert(err.message)});

      setTitle("")
      setTopic("")
      setDescription("")
      setLink("")
      setImgURL("")
      setCat("")
      setComment([])
  navigate("/feed");
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
    tags: [Title.toLocaleLowerCase(), Topic.toLocaleLowerCase()],

}).then(()=>{alert("success!!")}).catch(err=>{alert(err.message)});

setTitle("")
setTopic("")
setDescription("")
setLink("")
setImgURL("")
setCat("")
setComment([])
navigate("/feed");

      }
      
  };


    return(
       <div class="publishPost">
         <img class="img6" src={Img6} alt="" />
      <img class="img5" src={Img5} alt="" />
        <Box sx={{
        "& .MuiTextField-root": { m: 1 , width:"150ch" },
        marginLeft:3, marginTop:5, color: "white"
      }}>
            <Typography variant="h3" align="center">CONTRIBUTE </Typography>
            <TextField 
            fullWidth label="Title" 
            id="Title" 
            margin="20px"  
            onChange={(e)=>{setTitle(e.target.value)}}
            sx={{margin:2}}
            required/>


            <TextField 
            fullWidth label="Field of Study" 
            id="Topic" 
            margin="20px"  
            onChange={(e)=>{setTopic(e.target.value)}}
            sx={{margin:2}}
            required/>

<TextField 
            fullWidth label="Description" 
            multiline
            rows={4}
            id="Description" 
            margin="20px"  
            onChange={(e)=>{setDescription(e.target.value)}}           
            sx={{margin:2}}
            required/>

<TextField 
            fullWidth label="Link (optional)" 
            id="Link" 
            margin="20px"  
            onChange={(e)=>{setLink(e.target.value)}}
            sx={{margin:2}}
            />
            <TextField 
            fullWidth label="Image" 
            id="Image" 
            margin="20px"  
            onChange={(e)=>{setImgURL(e.target.value)}}
            sx={{margin:2, color:"white"}}
            required/>

<FormControl  sx={{margin:2}}>
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
    </FormControl><br/>
          <Button
          variant="contained"
          color="secondary"
          sx={{ marginTop: "20px" , marginLeft:75 }}
            onClick={handleSubmit}
          >
            Publish
          </Button>

        </Box>
       </div>
    )}         