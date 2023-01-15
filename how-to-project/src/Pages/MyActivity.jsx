import React ,{useState}from "react";
import NavBar from "../NavBar";
import Img1 from "../Images/6.png";
import Img2 from "../Images/7.png";
import BCards from "../Elements/BCards";
import Blogs from "../Blogs";
import LoginIcon from "../Elements/login";
import Avatar from '@mui/material/Avatar';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import useAuthState from "../Firebase/hooks";
import { auth } from "../Firebase/firebase";
import { UserAuth } from "../Firebase/AuthContext";
import {Tabs,Tab} from "@mui/material";



function MyActivity() {
  const {user}=useAuthState(auth);
  const[value,setValue] = useState(0);

  return (
    <>
      <img class="img1" src={Img1} alt="" />
      <img class="img2" src={Img2} alt="" />

      

    <LoginIcon/>
      <NavBar />
      {user ?
      <div style={{marginLeft: '15%', marginRight: '5%'}}>
      <Avatar
  alt="Remy Sharp"
  src={user.photoURL}
  sx={{ width: 126, height: 126 ,marginLeft:67}}
/>
<Typography variant="h4" align="center" sx={{color:"white", margin:2, marginBottom: 10}}>{user.displayName}</Typography>
<Box sx={{
        
        backgroundColor: "rgb(70, 43, 136, 0.4)",
        marginLeft:3
      }}
    >
      <Tabs value={value} onChange={(e,val) => setValue(val) }
            textColor="white"
            indicatorColor="primary"
            aria-label="primary tabs example"
            sx={{marginLeft:25 , color:"white" , paddingLeft:9 }}>
                <Tab sx={{marginRight:3 , fontSize:23}} label="my submissions">
                  
                </Tab>
                <Tab sx={{marginRight:3 , fontSize:23}}label="liked"></Tab>
                <Tab sx={{marginRight:2 , fontSize:23}}label="bookmark"></Tab>
            </Tabs>
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
</div>
:<Typography variant="h4"align="center" sx={{color:"white", margin:4,marginTop:17}}>LOG IN TO ACCESS THE PROFILE</Typography>}

     
    </>
  );
}

export default MyActivity;