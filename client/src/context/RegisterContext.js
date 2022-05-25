import React, { useState, createContext } from "react";

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

  return (
    <RegisterContext.Provider value={{ userInfo, setUserInfo, userProfile, setUserProfile }}>
      {props.children}
    </RegisterContext.Provider>
  );
};
