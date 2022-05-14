import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import MainFooter from "../../components/footers/MainFooter";
import SecondaryFooter from "../../components/footers/SecondaryFooter";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post(
      "http://localhost:3000/users/signup",
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      },
      { headers: { "Content-Type": "application/json" } }
    );

    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/login" />;
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
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              id="inputLastName"
              className="form-control"
              placeholder="Potter"
              required
              onChange={(e) => setLastName(e.target.value)}
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
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-lg btn-primary btn-block" type="submit">
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
