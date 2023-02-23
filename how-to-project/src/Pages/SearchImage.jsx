import React, { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
export default function SearchImage(){
    const[image,setImage]=useState([])
    const[photo,setPhoto]=useState("");

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
      })
    }
    return(
        <>
        <div> 
            <input 
            onChange={handleChange} 
            type="text" 
            name="photo" 
            placeholder="Search for photos"
            />

            <Button onClick={getImage}>Get Image</Button>
        </div>

        <div className="container">
            <div className="row">
                {
                    image.map((value,index)=>{
                        return(
                            <Card sx={{ maxWidth: 345 ,margin:1}}>
                            <CardActionArea>
                              <CardMedia
                                component="img"
                                height="345"
                                src={value.urls.small}
                                alt="image"
                              />
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