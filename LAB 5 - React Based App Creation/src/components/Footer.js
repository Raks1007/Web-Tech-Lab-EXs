import React from "react";
import './footer.css'
function Footercomp() {
    return (
      <div id="footer-page">
        <div className="footer-section">
          <h1 className="footer-heading">
            Pretty
          </h1>
          <p data-aos="flip-right">Copyright © 2023 Pretty</p>
          <div className="footer d-flex flex-row justify-content-center">
            <img className="footer-img" src="../images/li.png" alt="" />
            <img className="footer-img" src="../images/github.png" alt="" />
            <img className="footer-img" src="../images/gmail.png" alt="" />
            <img className="footer-img" src="../images/insta.png" alt="" />
          </div>
        </div>
      </div>
    );
}
export default Footercomp;
