import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import MainFooter from "../../components/footers/MainFooter";
import SecondaryFooter from "../../components/footers/SecondaryFooter";
import "./signup.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
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

      if (response) {
        console.log("Succesfully logged in");
        console.log(response);
      } else {
        console.log("No cookie was recived from the server.");
        return;
      }

      setRedirect(true);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login-page">
      <form className="form-signin pt-5" onSubmit={handleSubmit} style={{marginBottom: "20px"}}>
        <h1 className="h3 mb-4 font-weight-normal">Sign into your account</h1>
        <label>Email address</label>
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
        <button type="submit" className="golden-button">
          Log in
        </button>
        <p></p>
        <a href="/forgotPassword">Forgot your password?</a>
      </form>
      <br></br>
      <MainFooter />
      <SecondaryFooter />
    </div>
  );
};

export default Login;
