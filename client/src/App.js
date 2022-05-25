import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Signup/Login";
import Register from "./pages/Signup/Register";
import Nav from "./components/navbar/Nav";
import Article from "./pages/Articles/Article";
import "./App.css";
import SecondaryFooter from "./components/footers/SecondaryFooter";
import ProfilePage from "./pages/Profile/ProfilePage";
import { ProviderRegisterContext } from "./context/RegisterContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProviderRegisterContext>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/article" element={<Article />} />
          </Routes>
          <SecondaryFooter />
        </ProviderRegisterContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
