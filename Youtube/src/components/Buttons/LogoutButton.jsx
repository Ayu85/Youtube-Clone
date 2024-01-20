import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";

const LogoutButton = () => {
    const { logout } = useAuth0();
    const theme = useSelector(store => store.theme.isDark)
    return (
        <div className={`flex px-2 gap-2 rounded-full items-center ${theme && "border-[#929292] border"} ${!theme && "border-slate-400 border"}`}>
            <FaUserCircle className={`text-2xl  ${theme && "text-white"} `} />
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className={`  py-1 
     ${theme && "text-blue-400 "}`}>Logout</button></div>
    );
};

export default LogoutButton;