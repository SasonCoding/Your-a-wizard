import React from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

const Nav = () => {
  const handleLogout = async (event) => {
    const response = await axios.post(
      "http://localhost:3000/users/logout",
      {},
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: "include",
      }
    );

    console.log(response);

    return;
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-md navbar-dark mb-4 p-2"
        style={{ backgroundColor: "black" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="./images/HP_Logo_NYC.png"
              alt="Harry potter"
              style={{ width: "120px", height: "40px" }}
            />
          </Link>
          <div className="d-flex">
            <div className="collapse navbar-collapse" id="navbarCollapse">
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
                  <Link className="nav-link" to="/login" onClick={handleLogout}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
