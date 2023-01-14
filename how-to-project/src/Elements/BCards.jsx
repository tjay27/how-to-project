import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


export default function BCards(props) {
  return (
    <div class="BCard">
      <Card
        sx={{
          maxWidth: 700,
          backgroundColor: "rgb(148, 207, 250, 0.4)",
          color: "white",
          display:"flex",
          borderRadius:7
        }}
      >
        <CardMedia component="img" height="120" 
        sx={{width:80,display:"flex",padding:3}} image={props.img} alt="media" />
        <CardContent sx={{display:"flex" }}>
          <Typography gutterBottom variant="h5" align="center" component="div">
            {props.heading}
          </Typography>
          
<Button
            size="small" 
            sx={{color: "#40F4FF" ,
                 marginLeft:"320px",
                 }}>
            <i class="fas fa-2x fa-trash"></i>
          </Button>
          <Button
            size="small"
            sx={{color: "#40F4FF" }}>    
            <i class="fa-solid fa-2x fa-eye"></i>     
 </Button>
          <Button
            size="small"
            sx={{color: "#40F4FF" }}>         
<i class="fa-solid fa-2x fa-pen-to-square"></i>         
 </Button>

        </CardContent>
      </Card>
    
    </div>
  );
}
