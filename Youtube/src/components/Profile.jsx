import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }
    return (
        isAuthenticated && (
            <div className="flex  gap-1 justify-between px-3 py-1" >
                <img src={user.picture} width={40} className="rounded-full" alt={user.name} />
                <h2>{user.name}</h2>
            </div>
        )
    );
};

export default Profile;