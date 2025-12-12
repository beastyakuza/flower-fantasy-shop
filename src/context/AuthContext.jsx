// src/context/AuthContext.jsx

import React, { createContext, useState, useContext, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);


    const login = (username, password) => {

        let userData = null;
        if (username === 'admin' && password === 'admin') {
            userData = { id: 1, username: 'admin', role: 'admin' };
        } else if (username === 'user' && password === 'user') {
            userData = { id: 2, username: 'user', role: 'user' };
        } else {
            return false; 
        }

        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData)); 
        return true; 
    };


    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };


    const isAdmin = user?.role === 'admin';

    const contextValue = {
        user,
        loading,
        login,
        logout,
        isAdmin, 
        isAuthenticated: !!user,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {!loading && children} 
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};