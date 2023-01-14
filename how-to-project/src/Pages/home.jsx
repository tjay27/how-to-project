import React from "react";
import mainImg from "../Images/image 2.png";
import obj1 from "../Images/1.png";
import obj2 from "../Images/2.png";
import obj3 from "../Images/3.png";


function Home() {
  return (
    <div>
      <div class="home-section-1">
        <div class="row">
          <div class="col-lg-5">
            <h1>Tag Line</h1>
            <h1>Tag Line</h1>
            <h1>Tag Line</h1>
            <button
              type="button"
              class="btn btn-outline-light btn-lg download-button"
            >
              <i class="fab fa-chrome" style={{ padding: "5px" }}></i> Get
              Chrome Extention
            </button>
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
