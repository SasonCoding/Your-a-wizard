import React, { useState, useEffect } from "react";
import axios from "axios";
import Houses from "../Houses/Houses";
import "./MagicCard.css";

const MagicCard = () => {
  // TODO: Add an autocomplete for the WizardlyRegion input and for the Wizardly spell.
  // # The database already has data for the spells just need to add data from an api for the region and then ad the autocomplete functionality.

  const handleSubmit = () => {
    console.log("Hello");
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-11">
          <div className="card magic-card text-center">
            <div className="card-body bg-black">
              <header>
                <form className="form-signin pt-4" id="profile-form" onSubmit={handleSubmit}>
                  <h3>CREATE YOUR PROFILE</h3>
                  <p></p>
                  <label>Wizardly Name</label>
                  <input
                    type="text"
                    id="inputWizardlyName"
                    className="form-control"
                    placeholder="Killer Kendall	"
                    required
                  />
                  <label>Wizardly Birth Date</label>
                  <input
                    type="date"
                    id="inputAge"
                    className="form-control"
                    required
                  />
                  <br></br>
                  <label>Wizardly Region</label>
                  <input
                    type="text"
                    id="inputRegion"
                    className="form-control"
                    placeholder="Durham and Northeast England"
                    required
                  />
                  <label>Favorite Wizardly Spell</label>
                  <input
                    type="text"
                    id="inputSpell"
                    className="form-control"
                    placeholder="Stupefy - Stuns target"
                    required
                  />
                </form>
              </header>
              <Houses />
              <button type="submit" className="golden-button m-4" form="profile-form">Submit Profile</button>
            </div>
            <div className="glow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagicCard;
