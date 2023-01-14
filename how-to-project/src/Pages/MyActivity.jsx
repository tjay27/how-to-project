import React from "react";
import NavBar from "../NavBar";
import Img1 from "../Images/6.png";
import Img2 from "../Images/7.png";
import BCards from "../Elements/BCards";
import Blogs from "../Blogs";
import LoginIcon from "../Elements/login";
import Avatar from '@mui/material/Avatar';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';


function MyActivity() {
  return (
    <>
      <img class="img1" src={Img1} alt="" />
      <img class="img2" src={Img2} alt="" />

      

    <LoginIcon/>
      <NavBar />
      <Avatar
  alt="Remy Sharp"
  src="/static/images/avatar/1.jpg"
  sx={{ width: 126, height: 126 ,marginLeft:80}}
/>
<Typography variant="h4" align="center" sx={{color:"white", margin:2}}>Deepanshi Chourasia</Typography>
     <Box sx={{
        
        backgroundColor: "rgb(70, 43, 136, 0.4)",
        marginLeft:3
      }}
    >
      <Typography variant="h5"align="center" sx={{color:"white", margin:2}}>my submissions</Typography>
       <div class="feed myfeed">
        {Blogs.map((blog) => (
          <BCards
            key={blog.id}
            img={blog.imgURL}
            heading={blog.heading}
            
          />
        ))}
      </div>
</Box>
    </>
  );
}

export default MyActivity;