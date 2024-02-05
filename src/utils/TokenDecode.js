import React, { useEffect, useContext, useState } from 'react'

import { jwtDecode } from "jwt-decode"
import axios from "axios"
import { UserType } from '../UserContext';


function TokenDecode() {
    // login  user ID
    const { userId, setUserId } = useContext(UserType);
    const [user, setUser] = useState("");
    console.log('user===>', user)

    useEffect(() => {

        const fetchUsers = async () => {
            if (!(localStorage.getItem("autoToken"))) {

                setUser(null);
            }
            else {
                const token = localStorage.getItem("autoToken")
                const decodedToken = jwtDecode(token);
                // console.log("decodedToken", decodedToken)

                const userId = decodedToken.userId;
                setUserId(userId);


                axios.get(`http://localhost:5000/users/getSigleUser/${userId}`)
                    .then((response) => {
                        setUser(response.data.data);
                    })
                    .catch((error) => {
                        console.log("error retrieving users", error);
                    });
            }
        };

        fetchUsers();

    }, [])

    return {
        userId,
        user

    }
}

export default TokenDecode;