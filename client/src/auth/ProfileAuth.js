import { Navigate } from "react-router-dom";
import { useRegister } from "../context/RegisterContext";

export const ProfileAuth = (props) => {
    const { finishedRegister } = useRegister();

    if(!finishedRegister) {
        return <Navigate to="/login" />
    }

    return props.children;
}