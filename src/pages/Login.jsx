
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import { useAuth } from '../context/AuthContext';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const success = login(username, password); 
        
        if (success) {
            if (username === 'admin' && password === 'admin') {
                navigate('/admin-crud'); 
            } else {
                navigate('/'); 
            }
        } else {
            alert('Invalid credentials. Try admin/admin or user/user.');
        }
    };

    return (
        <div className="login-container"> 
            <div className="login-form-wrapper"> 
                <h1 className="login-title">Login</h1>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            value={username} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            value={password} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <button type="submit" className="login-btn">Login</button> 
                </form>
                <p className="register-link-text">
                    Don't have an account? <Link to="/register">Sign up here.</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;