import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useLogin } from "../context/LoginContext";

export const ProfileAuth = () => {
  const location = useLocation();
  const { loggedIn } = useLogin();

  return loggedIn ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />
};
