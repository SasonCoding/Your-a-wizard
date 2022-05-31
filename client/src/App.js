import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProviderRegisterContext } from "./context/RegisterContext";
import { ProfileAuth } from "./auth/ProfileAuth";
import Home from "./pages/Home/Home";
import Login from "./pages/Signup/Login";
import Register from "./pages/Signup/Register";
import Nav from "./components/navbar/Nav";
import Article from "./pages/Articles/Article";
import SecondaryFooter from "./components/footers/SecondaryFooter";
import ProfilePage from "./pages/Profile/ProfilePage";
import Exception from "./pages/Exception/Exception";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ProviderRegisterContext>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<ProfileAuth><ProfilePage /></ProfileAuth>} />
            <Route path="/article" element={<Article />} /> {/*TODO: In order to make the routes protected we need to make a "middleware function" that will append before the requested component*/}
            <Route path="*" element={<Exception />}></Route>{/*TODO: Create a noMatch page for routes that doesnt match. */}
          </Routes>
          <SecondaryFooter />
        </ProviderRegisterContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
