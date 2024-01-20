import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";

const LoginButton = () => {
    const theme = useSelector(store => store.theme.isDark)
    const { loginWithRedirect } = useAuth0();
    return <div className={`flex px-2 gap-2 rounded-full items-center ${theme && "border-[#929292] border"} ${!theme && "border-slate-400 border"}`}>
        <FaUserCircle className={`text-2xl  ${theme && "text-white"} `} />
        <button onClick={() => loginWithRedirect()} className={`  py-1 
     ${theme && "text-blue-400 "}`}>Login</button></div>
};

export default LoginButton;