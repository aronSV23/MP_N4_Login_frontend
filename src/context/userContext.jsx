import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState()
    const [isAutenticated, setIsAutenticated] = useState(false)
    
    const loginUser = async ({ email, password }) => {
        const res = await axios.post('http://localhost:3000/api/user/login', {
            email,
            password,
        });

        setUserData(res.data.data)
        localStorage.setItem('token', JSON.stringify(res.data.token));
        setIsAutenticated(true)
    };

    const registerUser = async ({ email, password }) => {
        const res = await axios.post('http://localhost:3000/api/user/register', {
            email,
            password,
        });

        setUserData(res.data.data)
        localStorage.setItem('token', JSON.stringify(res.data.token));
        setIsAutenticated(true)
    };

    const getUserData = async () => {
        try {
        const token = JSON.parse(localStorage.getItem('token'))
        const res = await axios.get('http://localhost:3000/api/user/profile', { headers: { authorization: token }});
        
        setUserData(res.data)
    } catch (error) {
        console.log(error)
        if (/token/i.test(error.response.data.message)) {
            localStorage.removeItem('token');
            setIsAutenticated(false)
          }
    }
    };

    const editUserData = async (data) => {
        try {
            console.log(data)
        const token = JSON.parse(localStorage.getItem('token'))
        const res = await axios.patch('http://localhost:3000/api/user/update', data, { headers: { authorization: token }});
        console.log(res.data.data)
        setUserData(res.data.data)
    } catch (error) {
        
        if (/token/i.test(error.response.data.message)) {
            localStorage.removeItem('token');
            setIsAutenticated(false)
          }
    }
    };


    useEffect(() => {
        const token = localStorage.getItem('token'); // asumiendo que el token se almacena en el localStorage
        if (token) {
        getUserData()
        }
    }, [])

    useEffect(()=>{
        if (userData) {
        setIsAutenticated(true)
        }
    },[userData])

    return (
        <UserContext.Provider
            value={{
                loginUser,
                registerUser,
                getUserData,
                editUserData,
                setIsAutenticated,
                userData,
                isAutenticated
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
