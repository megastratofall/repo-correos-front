import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ handleLogout }) => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <a href="#" className="logo">REPO-ROUTES</a>
            <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`} id="menu-icon" onClick={toggleMenu}></i>
            <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
                <a href="#home" className="active">DASHBOARD</a>
                <button onClick={handleLogout} className="logout-btn">Logout</button>
            </nav>
        </header>
    );
};

export default Navbar;
