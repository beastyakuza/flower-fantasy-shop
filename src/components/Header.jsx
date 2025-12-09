import React from 'react';
// Asegúrate de importar 'Link' junto con otras importaciones de React Router DOM si las tienes
import { Link } from 'react-router-dom'; 
import './Header.css';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="app-header">
      <div className="app-header-content"> 
        
        <h1>FLOWER FANTASY</h1>
        
        <ul className="nav-links">
  {/* Asegúrate de que los enlaces estén envueltos en <li> */}
  <li><Link to="/">Home</Link></li> 
  <li><Link to="/products">Products</Link></li> 
  <li><Link to="/about">About</Link></li>
  <li><Link to="/contact">Contact</Link></li>
</ul>
    <div className="cart-icon-container"> 
        <FaShoppingCart size={25} color="black" /> 
    </div>
        
      </div>
    </header>
  );
};
export default Header;