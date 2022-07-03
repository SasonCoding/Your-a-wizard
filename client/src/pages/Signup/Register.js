import React from "react";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../../context/RegisterContext";
import axios from "axios";
import MainFooter from "../../components/footers/MainFooter";
import BubbleEffect from "../../specialEffects/Bubbles/BubbleEffect"

const Register = () => {
  const { userInfo, setUserInfo, setFinishedRegister } = useRegister();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(//Checking if the email is valid before redirecting the user.
        "http://localhost:3000/users/email", {email: userInfo.email}, { headers: { "Content-Type": "application/json" } }
      );

      setFinishedRegister(true);
      navigate('/register-profile');
      
    } catch(error) {
      alert("This email already exists");
      console.log(error);
    }
  };

  return (
    <div className="container-fluid">
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
          autoFocus
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
      <BubbleEffect />
      <MainFooter />
    </div>
  );
};

export default Register;
