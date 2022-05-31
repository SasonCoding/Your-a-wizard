import React, { useState, createContext, useContext } from "react";

export const RegisterContext = createContext();

export const ProviderRegisterContext = (props) => {

  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

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
    <RegisterContext.Provider value={{ userInfo, setUserInfo, userProfile, setUserProfile, loggedIn, setLoggedIn, finishedRegister, setFinishedRegister }}>
      {props.children}
    </RegisterContext.Provider>
  );
};

export const useRegister = () => {
  return useContext(RegisterContext);
}
