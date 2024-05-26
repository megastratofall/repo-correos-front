import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Navbar from './Navbar';

function Login() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const navigate = useNavigate();

useEffect(() => {
    // Redirigir si el usuario ya está autenticado
    if (localStorage.getItem('token')) {
    navigate('/dashboard');
    }
}, [navigate]);

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'same-origin',  
    });

    const data = await response.json();
    if (response.ok) {
        localStorage.setItem('token', data.token);
        setError('');
        navigate('/dashboard'); // Redirigir al dashboard después del login
    } else {
        setError(data.message);
    }
    } catch (error) {
    console.error('Error:', error);
    setError('Error en la solicitud. Por favor, intenta de nuevo más tarde.');
    }
};

return (
    <div className='container'>
    <Navbar />
    <div className="login form">
        <h2>WELCOME ADMINISTRATOR</h2>
        <h3>PLEASE, LOGIN TO ADD ROUTES</h3>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="email">EMAIL:</label>
            <input
            className='input-box'
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
        </div>
        <div className="form-group">
            <label htmlFor="password">PASSWORD:</label>
            <input
            className='input-box'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">LOGIN</button>
        </form>
    </div>
    </div>
);
}

export default Login;
