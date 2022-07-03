import React from "react";
import "./footers.css";

const MainFooter = () => {
  return (
      <footer className="main-footer">
        <div className="row px-4 m-0">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <ul>
              <h5>INFORMATION</h5>
              <li>
                <a href="#">ABOUT US</a>
              </li>
              <li>
                <a href="#">FAQ's</a>
              </li>
              <li>
                <a href="#">Shipping</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <ul>
              <h5>CONTACT US</h5>
              <li>
                <a href="#">Send us a message</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <ul>
              <h5>QUICK LINKS</h5>
              <li>
                <a href="#">Harry potter movie scedule</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
  );
};

export default MainFooter;
