import React from "react";
import "./Info.css";

function Info() {
  return (
    <div id="info-page">
      <div className="info-section">
        <div className="info-cards d-flex flex-row">
          <div>
            <div className=" cards info-1 d-flex flex-column">
              <div>
                <img
                  className="info-img"
                  src="https://img.freepik.com/premium-photo/woman-painting-her-lips-with-liquid-lipstick-close-up_127675-2890.jpg?w=1480"
                  alt=""
                />
              </div>
              <div>
                <h3>Lip gloss</h3>
                <p className="info-desc">
                Gives your lips a shiny lustre slick finish and add a subtle colour.
                Choose the colour that suits your lips. 
                </p>
                <a href="">
                  <button className="button1">Know More</button>
                </a>
              </div>
            </div>
          </div>
          <div >
            <div className="cards info-2">
              <div>
                <img
                  className="info-img"
                  src="https://static-bebeautiful-in.unileverservices.com/istockphoto-478639548-612x612.jpeg"
                  alt=""
                />
              </div>
              <div>
                <h3>Eye Shadows</h3>
                <p className="info-desc">
                Help create depth, highlight, and sculpt your look. 
                Makes your eyes stand out and help bring out the best features of your face.
                </p>
                <a href="#equipments-page">
                  <button className="button1">Know More</button>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="cards info-3">
              <div>
                <img
                  className="info-img"
                  src="https://media.istockphoto.com/id/485201410/photo/make-up-blue-eye-with-long-lashes-with-black-mascara.jpg?s=612x612&w=0&k=20&c=zqO8z2nofKbT_4DicftMaItbOZgKuAm7SpyilqfeUz4="
                  alt=""
                />
              </div>
              <div>
                <h3>Mascara</h3>
                <p className="info-desc">
                Enhance the appearance of your eyes by thickening, lengthening, and darkening the eyelashes.
                Lets you create whatever lash look you set your eyes on.
                </p>
                <a href="">
                  <button className="button1">Know More</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
