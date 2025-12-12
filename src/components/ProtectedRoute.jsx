// src/components/ProtectedRoute.jsx

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


const ProtectedRoute = ({ requiredRole = 'admin' }) => {
    const { isAuthenticated, isAdmin, loading } = useAuth();
    
    if (loading) {

        return <div>Loading session...</div>; 
    }

    if (!isAuthenticated) {

        return <Navigate to="/login" replace />;
    }

    if (requiredRole === 'admin' && !isAdmin) {

        alert("Access Denied: You do not have administrator permissions.");
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;