import React, { useState } from "react";
import BCards from "../Elements/BCards";
import Blogs from "../Elements/Blogs";
import Tech from "../Elements/Tech"
import ResearchPaper from "../Elements/ResearchPaper"
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import useAuthState from "../Firebase/hooks";
import { auth } from "../Firebase/firebase";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Liked from "../Elements/Liked";
import Bookmarked from "../Elements/Bookmarked";
import Navbar from "../Elements/Navbar";
import Button from "@mui/material/Button";


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
  const { user } = useAuthState(auth);
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Navbar />
      {/* SEARCH BAR 
      <div>
        <input 
          class="search-bar"
          type="search"
          placeholder="Search for Blogs , Technical writing or Research Paper "
          id="searchInput"
      />
      <Button class="search-icon" ><i class="fa-solid fa-magnifying-glass"></i></Button>

      </div>*/}

      <div style={{ marginLeft: '5%', marginRight: '5%' }}>

        {/* <Avatar
  alt="Remy Sharp"
  src={user.photoURL}
  sx={{ width: 126, height: 126 ,marginLeft:80}}
/> 
 <Typography variant="h4" align="center" sx={{color:"white", margin:2}}>{user.displayName}</Typography> */}
        <Box
          sx={{
            width: '100%',
            marginLeft: 1,
          }}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: 'divider',
              display: 'flex',
              justifyContent: 'center'
            }} >
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="white"
              indicatorColor="secondary"
              sx={{
                color: "white",
                marginTop: '5%',
                }}>
              <Tab sx={{ marginRight: 3, fontSize: '3.25vmin'}} label="BLOGS" {...a11yProps(0)} />
              <Tab sx={{ marginRight: 3, fontSize: '3.25vmin'}} label="RESEARCH PAPER"{...a11yProps(1)} />
              <Tab sx={{ marginRight: 3, fontSize: '3.25vmin'}} label="PLACEMENT STORIES" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Blogs />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ResearchPaper />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Tech />
          </TabPanel>
        </Box>
      </div>


    </>
  );
}
export default SearchPage;
