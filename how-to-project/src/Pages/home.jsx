import React from "react";
import mainImg from "../Images/image 2.png";
import Banner from "../Images/Banner.png";
import Line from "../Images/Line.png";
import Frame from "../Images/Frame.png";
import Logo from "../Images/Logo.png";
import LoginIcon from "../Elements/login";


import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import MemberCard from "../memberCard";
import members from "../members";


function Home() {
  return (
    <div>
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
      <div class="home-section-1">
        <div class="row">
          <div>
            <h1>Tag Line</h1>
            {/* <h1>Tag Line</h1>
            <h1>Tag Line</h1>
            <button
              type="button"
              class="btn btn-outline-light btn-lg download-button"
            >
              <i class="fab fa-chrome" style={{ padding: "5px" }}></i> Get
              Chrome Extention
            </button> */}
          </div>
          <div class="col-lg-7">
           {/* <img class="obj obj1" src={obj1} alt="1" />
            <img class="obj obj2" src={obj2} alt="2" />
            <img class="obj obj3" src={obj3} alt="3" /> */}
            <img class="mainImg" src={mainImg} alt="mainImg" />
            <img class="Banner" src={Banner} alt="Banner" />
          </div>
        </div>
      </div>

      <section id="features">
        <div class="row">
          <h1>FEATURES</h1>
          <img class="Line" src={Line} alt="Line" />
        </div>

        <div class="frames">
        <img class="Frame" src={Frame} alt="Frame" />
        <img class="Frame" src={Frame} alt="Frame" />
        <img class="Frame" src={Frame} alt="Frame" />
        </div>


          {/* <div class="col-lg-1">
            <img src={obj4} alt="3" />
          </div> */}
          {/* <div class="feature-box col-lg-4 feature-3">
            <div class="content">
              <i class="fas fa-5x fa-clock features-icons"></i>
              <h3>Feature 1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a
                sodales nulla.
              </p>
            </div>
          </div>

          <div class="feature-box col-lg-4">
            <i class="fas fa-5x fa-file features-icons"></i>
            <h3>Feature 2</h3>
            <p>
              Quisque quis fermentum mauris. Aenean eu viverra magna, quis
              cursus mauris
            </p>
          </div>

          <div class="feature-box col-lg-4 feature-3">
            <i class="fas fa-5x fa-chart-line features-icons"></i>
            <h3>Feature 3</h3>
            <p>
              Fusce facilisis porta quam, non condimentum lectus pulvinar
              consectetur. Nam sed diam sed risus tincidunt ultrices.
            </p>
          </div>

          <div class="col-lg-1">
            <img src={obj5} alt="4" />
          </div> */}
        
      </section>

      <section id="team">
        <div class="row2">
          <h1>THE TEAM</h1>
          <img class="Line2" src={Line} alt="Line" />
        </div>

        <div class="frames2">
        <img class="Frame2" src={Frame} alt="Frame" />
        <img class="Frame2" src={Frame} alt="Frame" />
        <img class="Frame2" src={Frame} alt="Frame" />
        </div>
      </section>


      {/* <div class="teamSection">
        <h1 class="team">THE TEAM</h1>

        {members.map((m) => (
          <MemberCard key={m.id} img={m.imgURL} />
        ))}
      </div> */}
    </div>
  );
}

export default Home;
