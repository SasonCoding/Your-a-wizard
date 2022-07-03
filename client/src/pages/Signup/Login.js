import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../context/LoginContext"
import axios from "axios";
import MainFooter from "../../components/footers/MainFooter";
import BubbleEffect from "../../specialEffects/Bubbles/BubbleEffect";
import "./signup.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setLoggedIn } = useLogin();
  const navigate = useNavigate();

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
      setEmail('');
      setPassword('');
      setLoggedIn(true);
      navigate('/');

    } catch (error) {
      console.log(error?.response?.data);
    }
  };

  return (
    <div className="container-fluid">
      <form className="form-signin pt-5 mb-3" onSubmit={handleSubmit}>
        <h1 className="h3 mb-4 font-weight-normal">Sign into your account</h1>
        <label>Email address</label>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="example@mail.com"
          required
          autoFocus
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
      <BubbleEffect />
      <MainFooter />
    </div>
  );
};

export default Login;
