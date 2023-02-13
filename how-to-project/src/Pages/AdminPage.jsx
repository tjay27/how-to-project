import React, { useState } from "react";
import AdminCard from "./AdminCard";
import StatsAdmin from "./StatsAdmin"
import Blogs from "../Blogs";
import NavBar from "../NavBar";
import PopUp from "../Elements/PopUp";
import Fab from "@mui/material/Fab";
import Login from "../Images/Login.png";
import { Box, TextField } from "@mui/material";
import Logo from "../Images/Logo.png";
import LoginIcon from "../Elements/login";



function AdminPage() {
  const [openLogin, setOpenLogin] = useState(false);

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
      {/* <NavBar /> */}
      <div>
        <input
          class="search-bar"
          type="search"
          placeholder="Search"
          id="searchInput"
        ></input>
        <i class="fas fa-search search-icon"></i>
      </div>

      
      <div class="adminText">
        <h1>ADMIN PAGE</h1>
      </div>


      <Fab
        color="secondary"
        aria-label="Profile"
        onClick={() => setOpenLogin(true)}
        sx={{
          position: "absolute",
          display: "inline-block",
          right: "100px",
          top: "35px",
          color: "rgb(198, 154, 246)",
          bgColor: "transparent",
        }}
        class="profile-icon"
      >
        <i class=" fa-3x fas fa-user-circle"></i>
      </Fab>

      <PopUp
        trigger={openLogin}
        setTrigger={setOpenLogin}
        title="Login"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam in sapien elementum ipsum molestie dictum sit amet eu
                    lorem."
        submitText="Login"
      >
        <img class="loginImg" src={Login} alt="" />
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "50ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            fullWidth
            id="UserName"
            label="Username"
            type="Username"
            autoComplete="current-password"
          />
          <TextField
            fullWidth
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
        </Box>
      </PopUp>

      
      <StatsAdmin/>
      <div class="feed myfeed">
        {Blogs.map((blog) => (
          <AdminCard
            key={blog.id}
            img={blog.imgURL}
            heading={blog.heading}
            desc={blog.desc}
          />
        ))}
      </div>
    </>
  );
}

export default AdminPage;
