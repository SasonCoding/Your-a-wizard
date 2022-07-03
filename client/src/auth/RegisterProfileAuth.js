import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useRegister } from "../context/RegisterContext";

export const RegisterProfileAuth = (props) => {
  const location = useLocation();
  const { finishedRegister } = useRegister();
  
  return finishedRegister ? <Outlet /> : <Navigate to="/register" state={{ from: location }} replace />
};