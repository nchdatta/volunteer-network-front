import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const RegPrivateRouter = ({ children }) => {
    const location = useLocation();
    const { user } = useAuth();

    return user.email ? children : <Navigate
        to="/login"
        state={{ from: location.pathname }} replace />;
};

export default RegPrivateRouter;