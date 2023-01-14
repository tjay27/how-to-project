import React, { useState, useEffect } from "react";
import BlogCard from "../BlogCards";
import NavBar from "../NavBar";
import Img1 from "../Images/6.png";
import Img2 from "../Images/7.png";
import LoginIcon from "../Elements/login";

function Feeds() {
  
  return (
    <>
      <img class="img1" src={Img1} alt="" />
      <img class="img2" src={Img2} alt="" />

      <LoginIcon/>

      <NavBar />
      <div class="feed myfeed">
     {/*} {Blogs.map((blog) => (

          <BlogCard
          key={blog.id}
          img={blog.imgURL}
          heading={blog.heading}
          desc={blog.desc}/>
     ))}*/}
     <BlogCard/>

      </div>
      
    </>
  );
}

export default Feeds;
