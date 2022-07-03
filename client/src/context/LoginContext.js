import React, { useState, createContext, useContext } from "react";

export const LoginContext = createContext();

export const ProviderLoginContext = (props) => {

  const [ loggedIn, setLoggedIn ] = useState(false);

  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => {//This is a custom hook.
  return useContext(LoginContext);
}
