import React, { createContext, useState } from "react";

const UserType = createContext();
const UserContext = ({ children }) => {
    const [userId, setUserId] = useState("");
    // console.log("create =>", userId);
    return (
        <UserType.Provider value={{ userId, setUserId }}>

            {children}
        </UserType.Provider>
    );
};

export { UserType, UserContext };
