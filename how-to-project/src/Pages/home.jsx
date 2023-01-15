import React from "react";
import mainImg from "../Images/image 2.png";
import obj1 from "../Images/1.png";
import obj2 from "../Images/2.png";
import obj3 from "../Images/3.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div class="home-section-1">
        <div class="row">
          <div class="col-lg-5">
            <h1>Tech Tweaks</h1>
            <h4>Build on a Solid Foundation, Reach for the Stars!</h4>
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
