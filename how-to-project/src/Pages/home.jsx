import React from "react";
import mainImg from "../Images/image 2.png";
import Line from "../Images/Line.png";
import Frame from "../Images/Frame.png";
import Logo from "../Images/Logo.png";
import LoginIcon from "../Elements/login";
import Navbar  from "../Elements/Navbar";


import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import MemberCard from "../memberCard";
import members from "../members";


function Home() {
  return (
    <div>
      <Navbar />
      <div class="home-section-1">
        <div class="row">
          <div>
            <h1>TAG LINE HERE</h1>
            
          </div>
          {/* <img src={mainImg} alt="" /> */}
          <div class="col-lg-7">
            <img class="mainImg" src={mainImg} alt="mainImg" />
            
          </div>

          {/* <div class="corousel">
              <div class="marquee-container" >
                <div class="overlay">
                </div>

                <div class="marquee">
                Celestial Biscuit IGDTUW • Celestial Biscuit IGDTUW • Celestial Biscuit IGDTUW • Celestial Biscuit IGDTUW • Celestial Biscuit IGDTUW • Celestial Biscuit IGDTUW • Celestial Biscuit IGDTUW • Celestial Biscuit IGDTUW •
                </div>
                <div class="marquee" aria-hidden="true">
                Celestial Biscuit IGDTUW • Celestial Biscuit IGDTUW • Celestial Biscuit IGDTUW • Celestial Biscuit IGDTUW • Celestial Biscuit IGDTUW • Celestial Biscuit IGDTUW • Celestial Biscuit IGDTUW • Celestial Biscuit IGDTUW •
                </div>

              </div>
            </div> */}

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
