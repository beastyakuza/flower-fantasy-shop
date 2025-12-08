import './Header.css';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="app-header">
      <div className="app-header-content"> 
        
        <h1>FLOWER FANTASY</h1>
        
        <ul className="nav-links">
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
    <div className="cart-icon-container"> 
        <FaShoppingCart size={25} color="black" /> 
    </div>
        
      </div>
    </header>
  );
};
export default Header;