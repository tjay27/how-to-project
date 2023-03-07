import React from "react";
import mainImg from "../Images/image 2.png";
import Line from "../Images/Line.png";
import Navbar  from "../Elements/Navbar";
import { FlipCard } from "react-flipme";
import Logo from "../Images/Logo.png";
import Down_arrow from "../Images/down-arrow.png";
import FramePooja from "../Images/FramePooja.png"

import Marquee from "react-fast-marquee";
import CardFlip from "../Elements/FlipCard";
import { UserAuth } from "../Firebase/AuthContext";
import LoginIcon from "../Elements/login";

function Home() {

  const {user, logOut} = UserAuth();

    const handleSignOut = async()=>{
        try{
          await logOut()
        }catch(error){
          console.log(error)
        }
    }

  return (
    <div>
      < Navbar/>
      

      {/*****  SECTION 1 ******/}
      <div class="home-section-1">
        <div class="row">
          <div>
            <h1>"Discover the world through our words"</h1>
            
          </div>
          <div class="col-lg-7">
            <img class="mainImg" src={mainImg} alt="mainImg" />
            
          </div>

           <div className="marquee-text">
            <Marquee>
            <span> CELESTIAL BISCUIT IGDTUW  • &nbsp;</span>
            <span> CELESTIAL BISCUIT IGDTUW  • &nbsp;</span>
            <span> CELESTIAL BISCUIT IGDTUW  • &nbsp;</span>
            <span> CELESTIAL BISCUIT IGDTUW  • &nbsp;</span>
            <span> CELESTIAL BISCUIT IGDTUW  • &nbsp;</span>
            <span> CELESTIAL BISCUIT IGDTUW  • &nbsp;</span>
            <span> CELESTIAL BISCUIT IGDTUW  • &nbsp;</span>
            </Marquee>
          </div>

        </div>
      </div>

      <section id="features">
        <div class="row">
          <h1>FEATURES</h1>
          <img class="Line" src={Line} alt="Line" />
        </div>

        <div class="frames">

        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
              <h3>FEATURE NAME</h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>We aim to provide a platform for the students of Indira Gandhi Delhi Technical University for Women (IGDTUW) to read and access the technical writings, 
                such as blogs, articles, and papers, written by their peers at the university. </p>

              </FlipCard.Back>
          </FlipCard>
        </div>

        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
            <h3>FEATURE NAME</h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>User-friendly portal to promote technical writing among students and to make the writings of the students at the university more accessible and widely read among their peers.</p>
            </FlipCard.Back>
          </FlipCard>
        </div>

        <div className='card-main'>
          <FlipCard>
            <FlipCard.Front className="cardFront card">
            <h3>FEATURE NAME</h3>
            </FlipCard.Front>
            <FlipCard.Back className="cardBack card">
              <p>Features such as commenting, rating and discussion features to foster a sense of community among students who write and read the technical writings.</p>
            </FlipCard.Back>
          </FlipCard>
        </div>

        </div>
        
      </section>

      <section id="team">
        <div class="row">
          <h1>TEAM</h1>
          <img class="Line" src={Line} alt="Line" style={{width: "150px",}}/>
        </div>

        <div class="team-frames">
        <img src={FramePooja}/>
        <img src={FramePooja}/>
        <img src={FramePooja}/>
        <img src={FramePooja}/>
        <img src={FramePooja}/>

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
