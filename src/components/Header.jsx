// src/components/Header.jsx (MODIFICADO)

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext'; 
import './Header.css';

const Header = () => {
    const { isAuthenticated, logout, isAdmin } = useAuth();
    const { cartItems } = useCart(); 
    
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const handleLogout = () => {
        logout();
        navigate('/');
        setIsMenuOpen(false); 
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="main-header">
            
            <Link to="/" className="logo">
                Flower Fantasy
            </Link>

            <button className="menu-toggle" onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
                <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link to="/products" className="nav-link" onClick={() => setIsMenuOpen(false)}>Products</Link>
                <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
            </nav>

            <div className={`header-icons ${isMenuOpen ? 'open' : ''}`}>
                {isAuthenticated ? (
                    <>
                        {isAdmin && (
                            <Link to="/admin-crud" className="icon-link" title="Admin Panel" onClick={() => setIsMenuOpen(false)}>
                                <span>Admin</span>
                            </Link>
                        )}
                        <button onClick={handleLogout} className="icon-link logout-btn" title="Logout">
                            Logout
                        </button>
                    </>
                ) : (
                    <Link to="/login" className="icon-link" title="Login" onClick={() => setIsMenuOpen(false)}>
                        <FaUser /> Login
                    </Link>
                )}
                <Link to="/cart" className="icon-link cart-icon-wrapper" title="View Cart" onClick={() => setIsMenuOpen(false)}>
                    <FaShoppingCart className="cart-icon" />
                    {totalItems > 0 && (
                        <span className="cart-badge">{totalItems}</span>
                    )}
                </Link>
            </div>
            
        </header>
    );
};

export default Header;