import React from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
const navigate = useNavigate();

const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
};

return (
    <div>
    <Navbar handleLogout={handleLogout} />
    <div>
        <h2>Welcome to the dashboard!</h2>
        <p>This is your control panel.</p>
    </div>
    </div>
);
}

export default Dashboard;
