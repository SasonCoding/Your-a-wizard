import React from "react";
import "./footers.css";

const SecondaryFooter = () => {
  return (
    <div>
      <footer className="secondary-footer">
        <div className="row mx-5 pt-2">
          <div className="col-8">
            <h7>© 2022 WEBSITE MANAGED BY MOSHE ZFANIA</h7>
          </div>
          <div className="col-2">
            <a href="#">Tearms And Conditions</a>
          </div>
          <div className="col-2">
            <a href="#">Privacy And Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SecondaryFooter;
