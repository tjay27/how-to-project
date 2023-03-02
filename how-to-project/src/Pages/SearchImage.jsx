import React, { useState } from "react";
import axios from "axios";
import { Button, CardContent } from "@mui/material";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Navbar from "../Elements/Navbar";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";

export default function SearchImage(){
    const[image,setImage]=useState([])
    const[photo,setPhoto]=useState("");
    const[img,setImg]=useState("")

    function handleChange(event){
        setPhoto(event.target.value)
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
    const handleImage=(e)=>{
      //const bloglist= collection(db,"Image")
      //await addDoc(bloglist,{
       // img
      //}).then(()=>{alert("success!!")}).catch(err=>{alert(err.message)});

      //setImg("")

      // console.log(e);
      console.log(e.target.currentSrc);
      console.log("clicked")
    }
    return(
        <>
        <Navbar/>
        <div> 
            <input 
            onChange={handleChange} 
            class="search-bar"
            type="search"
            placeholder="Search for photos"
            id="searchInput"
            />

            <Button onClick={getImage}>Get Image</Button>
        </div>

        <div className="container">
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
                              <CardContent>{prop.urls.small}</CardContent>
                            </CardActionArea>
                          </Card>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}