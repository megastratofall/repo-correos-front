import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated }) => {
const navigate = useNavigate();

useEffect(() => {
    if (!isAuthenticated) {
    navigate('/login');
    }
}, [isAuthenticated, navigate]);

return isAuthenticated ? <Outlet /> : null;
};

export default PrivateRoute;