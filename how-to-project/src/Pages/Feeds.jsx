import React, { useState, useEffect } from "react";
import BlogCard from "../BlogCards";
import LoginIcon from "../Elements/login";
import Logo from "../Images/Logo.png";
import { Link } from "react-router-dom";
import { Button , Typography } from "@mui/material";
import TransitionModal from "../Elements/Modal"
import Navbar from "../Elements/Navbar";
function Feeds() {
  
  return (
    <>
    {/* <div class="bar">
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
  </div> */}
      <Navbar />

      <div class="feed myfeed">
     {/*} {Blogs.map((blog) => (

          <BlogCard
          key={blog.id}
          img={blog.imgURL}
          heading={blog.heading}
          desc={blog.desc}/>
     ))}*/}

     <BlogCard/>
     <TransitionModal 
            title="Share"
            button="Publish"
            >
            <Typography>do you wish to publish ?</Typography>
            <Link to="/Contribute" style={{ textDecoration: "none", color: "white" }}>
            <Button variant="contained"
                      color="secondary"
                      sx={{ marginTop: "20px" }}> PUBLISH
                </Button>
          </Link>
          </TransitionModal>

      </div>
      
    </>
  );
}

export default Feeds;
