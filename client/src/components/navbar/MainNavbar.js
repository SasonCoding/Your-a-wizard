import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../../context/LoginContext";
import SubNavbar from "./SubNavbar";
import axios from "axios";

const MainNavbar = () => {
  const { loggedIn, setLoggedIn } = useLogin();

  const handleLogout = async (event) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/users/logout",
        {},
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: "include",
        }
      );
      setLoggedIn(false);
      console.log(response?.data);
    } catch (error) {
      const { data: { message }, status } = error?.response;
      console.log(message, status);
    }

    return;
  };

  useEffect(() => {
    const handleCheckUser = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users/user", {
          headers: { "Content-Type": "application/json" },
          withCredentials: "include",
        });
        // console.log(`Successfully checked if the user is logged in ${response}`);
        setLoggedIn(true);
      } catch (error) {
        console.log(error?.response?.data?.message);
      }
    };

    handleCheckUser();
  }, [setLoggedIn]);

  return (
    <>
      <div className="p-2">
        <div className="">
          <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-black px-1">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                <img
                  src="./images/HP_Logo_NYC.png"
                  alt="Harry potter"
                  style={{ width: "120px", height: "40px" }}
                />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#MainNavbar"
                aria-controls="MainNavbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              {loggedIn && (
                <div className="navbar-collapse collapse" id="navbar">
                  <ul className="navbar-nav">
                    <li className="nav-item px-2">
                      <Link className="nav-link" to="/profile">
                        Profile
                      </Link>
                    </li>
                    <li className="nav-item px-2">
                      <Link className="nav-link" to="/article">
                        Article
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
              <div>
                <div className="navbar-collapse collapse" id="MainNavbar">
                  <ul className="navbar-nav">
                    <li className="nav-item active px-2">
                      <Link className="nav-link" to="/login">
                        Login
                      </Link>
                    </li>
                    <li className="nav-item px-2">
                      <Link className="nav-link" to="/register">
                        Register
                      </Link>
                    </li>
                    <li className="nav-item px-2">
                      {loggedIn && (
                        <Link
                          className="nav-link"
                          to="/login"
                          onClick={handleLogout}
                        >
                          Logout
                        </Link>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <SubNavbar />
      </div>
    </>
  );
};

export default MainNavbar;
