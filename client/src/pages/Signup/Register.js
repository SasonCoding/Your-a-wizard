import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { RegisterContext } from "../../context/RegisterContext";
import axios from "axios";
import MainFooter from "../../components/footers/MainFooter";
import SecondaryFooter from "../../components/footers/SecondaryFooter";

const Register = () => {
  const { userInfo, setUserInfo } = useContext(RegisterContext);
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/users/email", {email: userInfo.email}, { headers: { "Content-Type": "application/json" } }
      );
      
      if(response.data.message === "The email is valid" && response.status === 200) {
        setRedirect(true);
      }

    } catch {
      alert("This email already exists")
    }
  };

  if (redirect) {
    return <Navigate to="/profile" />;
  }

  return (
    <div>
      <form className="form-signin" onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Please Register</h1>
        <div className="row mb-2">
        <label>First & Last name</label>
          <div className="col-6">
            <input
              type="text"
              id="inputFirstName"
              className="form-control"
              placeholder="Harry"
              required
              onChange={(e) => setUserInfo({ ...userInfo, firstName: e.target.value})}
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              id="inputLastName"
              className="form-control"
              placeholder="Potter"
              required
              onChange={(e) => setUserInfo({ ...userInfo, lastName: e.target.value})}
            />
          </div>
        </div>
        <label>Email Address</label>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="example@mail.com"
          required
          autofocus
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value})}
        />
        <label>Password</label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="password"
          required
          onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value})}
        />
        <button className="golden-button" type="submit">
          Register
        </button>
        <p></p>
        <a href="/login">Already have an account?</a>
      </form>
      <MainFooter />
    </div>
  );
};

export default Register;
