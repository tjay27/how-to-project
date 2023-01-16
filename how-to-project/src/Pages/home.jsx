import React from "react";
import mainImg from "../Images/image 2.png";
import obj1 from "../Images/1.png";
import obj2 from "../Images/2.png";
import obj3 from "../Images/3.png";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

function Home() {
  return (
    <div>
      <div class="home-section-1">
        <div class="row">
          <div class="col-lg-5">
            <Typography variant="h1">Tech</Typography>
            <Typography variant="h1" sx={{color:"#c69af6"}}>Tweaks</Typography>
             
            <h4><i>Build on a Solid Foundation, Reach for the Stars!</i></h4>
            <p>Speak through your technical writings...</p>
            <Link to="/feed">
            <button
              type="button"
              class="btn btn-outline-light btn-lg" 
            >Go to Home
            </button>
            </Link>
            
          </div>
          <div class="col-lg-7">
            <img class="obj obj1" src={obj1} alt="1" />
            <img class="obj obj2" src={obj2} alt="2" />
            <img class="obj obj3" src={obj3} alt="3" />
            <img class="main-image" src={mainImg} alt="mainImg" />
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Home;
