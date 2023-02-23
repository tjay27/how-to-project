import React ,{useState}from "react";
import Chips from '../Elements/Chips';
import BlogChips from '../Elements/BlogChips';
import NavBar from "../NavBar";
import {Typography} from '@mui/material';
import LoginIcon from "../Elements/login";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ResearchPaper from "../Elements/ResearchPaper"
import Tech from "../Elements/Tech"
import Blogs from "../Elements/Blogs"
import Logo from "../Images/Logo.png";
import Navbar from "../Elements/Navbar";


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

function SearchPage() {
  const[value,setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
    <div class="bar">
    <nav>
    <img class="Logo" src={Logo} alt="Logo" />

    <ul>
      <li><a href="feed">Feed</a></li>
      <li><a href="My-Activity">My Activity</a></li>
      <li><a href="SearchPage">Search</a></li>
    </ul>
    <div class="dropdown">
<button class="dropbtn">More</button>
<div class="dropdown-content">
<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#">Publish</button>
<a href="#">Invite</a>
<a href="#">Feedback</a>
</div>
</div>
    <button type="button" class="b2">Get Chrome Extension</button>
    <LoginIcon/>

    </nav>
    <hr/>
  </div>
   {/* <LoginIcon/>
      <NavBar /> */}

      {/* <div className="header-search">
        <Typography variant="h1" marginTop={"20px"}>TOPICS</Typography>
      </div> */}
      <div className="search-container">     
       <Typography variant='h4' color="white" margin="30px" marginTop={20} marginLeft={-10} fontFamily="Montserrat">TOPICS</Typography>
       <div>

        {/* SEARCH BAR */}
      <div>
        <input 
        class="search-bar"
      type="text"
      placeholder="        Search"
      ></input>

      </div>
        
       <Box
    sx={{
        width: '100%',
        marginLeft:3
      }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="white"
            indicatorColor="primary"
            sx={{ color:"white" }}>
          <Tab sx={{marginRight:3 , fontSize:20}} label="Research Paper" {...a11yProps(0)} />
          <Tab sx={{marginRight:3 , fontSize:20}} label="Blogs"{...a11yProps(1)} />
          <Tab sx={{marginRight:3 , fontSize:20}} label="Technical Writings" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>       
          <ResearchPaper/>     
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Blogs/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Tech/>
      </TabPanel>
    </Box>
       </div>
       <Typography variant='h4' color="white" marginTop={10} marginLeft={-10} fontFamily="Montserrat">FOR YOU</Typography>
       <BlogChips/><br/>
       <a href="">view more</a>
      </div>
      <Navbar/>
      

      
    </>
  );
}

export default SearchPage;
