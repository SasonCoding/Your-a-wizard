import React from "react";
import { useRegister } from "../../../context/RegisterContext";
import axios from "axios";
import Houses from "../../../specialEffects/Houses/Houses";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import Smoke from "../../../specialEffects/Smoke/Smoke";

const RegisterProfile = () => {
  // TODO: Add an autocomplete for the WizardlyRegion input and for the Wizardly spell.
  // # The database already has data for the spells just need to add data from an api for the region and then ad the autocomplete functionality.
  const { userProfile, setUserProfile, userInfo, setUserInfo, initUser, setLoggedIn } = useRegister();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { firstName, lastName, email, password } = userInfo;
      const { wizardlyName, birthDate, region, favoriteSpell, house } = userProfile;

      const registerResponse = await axios.post(
        "http://localhost:3000/users/signup",
        {
          firstName: firstName,
          lastName: lastName,
          wizardlyName: wizardlyName,
          dateOfBirth: birthDate,
          region: region,
          favoriteSpell: favoriteSpell,
          house: house,
          email: email,
          password: password,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      try {
        const loginResponse = await axios.post(
          "http://localhost:3000/users/login",
          {
            email: email,
            password: password,
          },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: "include",
          }
        );

        setLoggedIn(true);
        navigate("/");
      } catch (error) {
        console.log(error);
      } finally {
        setUserInfo(initUser);
      }
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  return (
    <>
      <Smoke />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11 col-md-10 col-sm-10">
            <div className="card magic-card text-center">
              <div className="card-body bg-black">
                <header>
                  <form
                    className="form-signin pt-4"
                    id="profile-form"
                    onSubmit={handleSubmit}
                  >
                    <h3>CREATE YOUR PROFILE</h3>
                    <p></p>
                    <label>Wizardly Name</label>
                    <input
                      type="text"
                      id="inputWizardlyName"
                      className="form-control"
                      placeholder="Killer Kendall	"
                      required
                      onChange={(e) =>
                        setUserProfile({
                          ...userProfile,
                          wizardlyName: e.target.value,
                        })
                      }
                    />
                    <label>Wizardly Birth Date</label>
                    <input
                      type="date"
                      id="inputAge"
                      className="form-control"
                      required
                      onChange={(e) =>
                        setUserProfile({
                          ...userProfile,
                          birthDate: e.target.value,
                        })
                      }
                    />
                    <br></br>
                    <label>Wizardly Region</label>
                    <input
                      type="text"
                      id="inputRegion"
                      className="form-control"
                      placeholder="Durham and Northeast England"
                      required
                      onChange={(e) =>
                        setUserProfile({
                          ...userProfile,
                          region: e.target.value,
                        })
                      }
                    />
                    <label>Favorite Wizardly Spell</label>
                    <input
                      type="text"
                      id="inputSpell"
                      className="form-control"
                      placeholder="Stupefy - Stuns target"
                      required
                      onChange={(e) =>
                        setUserProfile({
                          ...userProfile,
                          favoriteSpell: e.target.value,
                        })
                      }
                    />
                  </form>
                </header>
                <Houses />
                <button
                  type="submit"
                  className="golden-button m-4"
                  form="profile-form"
                >
                  Submit Profile
                </button>
              </div>
              <div className="glow"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterProfile;
