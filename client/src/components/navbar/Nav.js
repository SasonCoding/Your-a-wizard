import React from "react";
import { Link } from "react-router-dom";
import { useRegister } from "../../context/RegisterContext";
import axios from "axios";

const Nav = () => {
  const { loggedIn, setLoggedIn } = useRegister();

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
      console.log(response);
    } catch (error) {
      const {
        data: { message }, status} = error.response;
        console.log(message, status);
    }

    return;
  };

  return (
    <div className="p-5">
      <nav
        className="navbar fixed-top navbar-expand-sm navbar-dark p-2"
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
          <div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
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
  );
};

export default Nav;
