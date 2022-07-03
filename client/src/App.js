import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProviderRegisterContext } from "./context/RegisterContext";
import { RegisterProfileAuth } from "./auth/RegisterProfileAuth";
import { ProfileAuth } from "./auth/ProfileAuth";
import Home from "./pages/Home/Home";
import Login from "./pages/Signup/Login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Signup/Register";
import MainNavbar from "./components/navbar/MainNavbar";
import Article from "./pages/Articles/Article";
import SecondaryFooter from "./components/footers/SecondaryFooter";
import RegisterProfile from "./pages/Signup/RegisterProfile/RegisterProfile";
import Exception from "./pages/Exception/Exception";
import "./App.css";
import { ProviderLoginContext } from "./context/LoginContext";
import Documentation from "./pages/Documentation/Documentation";
import Characters from "./pages/Characters/Characters";
import Books from "./pages/Books/Books";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ProviderRegisterContext>
        <ProviderLoginContext>
          <MainNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route element={<RegisterProfileAuth />}>
              <Route path="/register-profile" element={<RegisterProfile />} />
            </Route>

            <Route element={<ProfileAuth />}>
              <Route path="/profile" element={<Profile />} />
            </Route>

            <Route path="/article" element={<Article />} /> 
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/books" element={<Books />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="*" element={<Exception />}></Route>
          </Routes>
          <SecondaryFooter />
        </ProviderLoginContext>
        </ProviderRegisterContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
