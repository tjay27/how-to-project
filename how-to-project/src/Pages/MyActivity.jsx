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
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function MyActivity() {
  const {user}=useAuthState(auth);
  const[value,setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
<Typography variant="h4" align="center" sx={{color:"white", margin:2}}>{user.displayName}</Typography>
<Box
    sx={{
        width: '100%',
        backgroundColor: "rgb(70, 43, 136, 0.4)",
        marginLeft:3
      }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="white"
            indicatorColor="primary"
            aria-label="primary tabs example"
            sx={{marginLeft:47 , color:"white" , paddingLeft:9 }}>
          <Tab sx={{marginRight:3 , fontSize:23}} label="my submissions" {...a11yProps(0)} />
          <Tab sx={{marginRight:3 , fontSize:23}} label="liked"{...a11yProps(1)} />
          <Tab sx={{marginRight:3 , fontSize:23}} label="Bookmark" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div class="feed myfeed">
                    <BCards />
                  </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
</div>
:<Typography variant="h4"align="center" sx={{color:"white", margin:4,marginTop:17}}>LOG IN TO ACCESS THE PROFILE</Typography>}

     
    </>
  );
}

export default MyActivity;