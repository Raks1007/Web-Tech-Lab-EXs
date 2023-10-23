import React from "react";
import "./navbar.css";
import Homecomp from "./Home";

function Nav() {
    return (
      <div>
        <section className="first">
          <div className="main-section innerwidth">
            <div className="d-flex flex-row">
              <div className="nav1">
                <img
                  className="logo"
                  src="https://res.cloudinary.com/dvznq1gfv/image/upload/v1695483142/image-removebg-preview_uoihpq.png"
                  alt=""
                />
              </div>
              <div>
                <h3 className="logo-head">Pretty</h3>
              </div>
            </div>

            <div className="nav-section">
              <a className="pages" href="#info-page">
                Our Products
              </a>
              <a className="pages" href="#footer-page">
                Contact Us
              </a>
              <button className="button">Get Started</button>
            </div>
          </div>
          <Homecomp />
        </section>
      </div>
    );
}
export default Nav;