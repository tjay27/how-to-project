import React, { useState } from "react";
import axios from "axios";
import { Button, CardContent, TextField } from "@mui/material";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Navbar from "../Elements/Navbar";


export default function SearchImage({multiformValue,setMultiformValue, handleSubmit}){
    const[image,setImage]=useState([])
    const[photo,setPhoto]=useState("");

    function handleImg(event){
        setPhoto(event.target.value);
        // setMultiformValue({...multiformValue,imgURL:(event.target.value)})
    }
    const getImage=()=>{
        console.log(photo);
        const url = "https://api.unsplash.com/search/photos?page=1&per_page=21&query="
        +photo
        +"&client_id=v86lrJGasQUoSxAr-QPu0VGuOUUjIE07njw-R1bMyl0"
      axios.get(url)
      .then((response)=>{
        setImage(response.data.results)
        console.log(response.data.results)
      })
    }
    const handleImage=async(e)=>{
      //const bloglist= collection(db,"Image")
      //await addDoc(bloglist,{
      //  img
      //}).then(()=>{alert("success!!")}).catch(err=>{alert(err.message)});

      //setImg(e.target.currentSrc)

      // console.log(e);
      //console.log(e.target.currentSrc);
      setMultiformValue({...multiformValue,imgURL:(e.target.currentSrc)})
      console.log("clicked")
    }
    
    return(
        <>
        <Navbar/>
        <div> 
            <input 
            onChange={handleImg} 
            class="search-bar"
            type="search"
            placeholder="Search for photos"
            id="searchInput"
            />
            <Button class="search-icon"onClick={getImage}><i class="fa-solid fa-magnifying-glass"></i></Button>
        </div>

        <div className="image-container">
            <div className="row">
                {
                    image.map((prop)=>{
                        return(
                            <Card sx={{ maxWidth: 345 ,margin:1}}>
                            <CardActionArea>
                              <CardMedia
                                component="img"
                                height="345"
                                src={prop.urls.small}
                                alt="image"
                                onClick={handleImage}
                              />
                              <CardContent>By {prop.user.name}</CardContent>
                            </CardActionArea>
                          </Card>
                        )
                    })
                }
            </div>
            <Button
          variant="contained"
          color="secondary"
          sx={{ marginTop: "20px" , marginLeft:75 }}
          onClick={handleSubmit}
          >Submit
          </Button>
        </div>
        
  {/*<TextField
   onChange={(e)=>{setMultiformValue({...multiformValue,imgURL:(e.target.value)})
   }}
  />*/}
        </>
    )
}