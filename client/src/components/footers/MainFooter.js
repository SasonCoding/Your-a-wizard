import React from "react";
import "./footers.css";

const MainFooter = () => {
  return (
    <div>
      <footer className="main-footer">
        <div className="row mx-5">
          <div className="col-4 px-5">
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
          <div className="col-4">
            <ul>
              <h5>CONTACT US</h5>
              <li>
                <a href="#">Send us a message</a>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <ul>
              <h5>QUICK LINKS</h5>
              <li>
                <a href="#">Harry potter movie scedule</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainFooter;
