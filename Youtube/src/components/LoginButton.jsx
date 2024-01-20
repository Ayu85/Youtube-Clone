import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";

const LoginButton = () => {
    const theme = useSelector(store => store.theme.isDark)
    const { loginWithRedirect } = useAuth0();
    return <FaUserCircle onClick={() => loginWithRedirect()}
        className={`text-3xl cursor-pointer  ${theme && "text-white"} ${!theme && "text-black"}`} />
};

export default LoginButton;