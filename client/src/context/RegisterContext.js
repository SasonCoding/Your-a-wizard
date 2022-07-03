import React, { useState, createContext, useContext } from "react";
import axios from "axios";

export const RegisterContext = createContext();

export const ProviderRegisterContext = (props) => {
  const initUser = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  }

  const [userInfo, setUserInfo] = useState( initUser );

  const [userProfile, setUserProfile] = useState({
    wizardlyName: "",
    birthDate: "",
    region: "",
    favoriteSpell: "",
    house: ""
  });

  const [loggedIn, setLoggedIn] = useState(false);
  const [finishedRegister, setFinishedRegister] = useState(false);

  return (
    <RegisterContext.Provider value={{ userInfo, setUserInfo, userProfile, setUserProfile, loggedIn, setLoggedIn, finishedRegister, setFinishedRegister, initUser }}>
      {props.children}
    </RegisterContext.Provider>
  );
};

export const useRegister = () => {//This is a custom hook.
  return useContext(RegisterContext);
}
