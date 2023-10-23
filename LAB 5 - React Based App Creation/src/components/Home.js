import React from "react";
import './home.css'
function Homecomp() {

    return (
      <>
        <div className="home-section innerwidth">
          <div className="left-section  d-flex flex-row justify-content-center">
            <div className="card1">
              <h1 className="heading1">Feel The Beauty in U</h1>
              <h3 className="motto">Use Pretty Live Pretty</h3>
              <a href="#info-page" className="link">
                <button className="pos">Get Started</button>
              </a>
            </div>
            <div className="image-div">
              <img
                className="home-image"
                src="https://res.cloudinary.com/dvznq1gfv/image/upload/v1695483664/image-removebg-preview_1_uw9ic0.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </>
    );
}

export default Homecomp;