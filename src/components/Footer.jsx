import './Footer.css';
const Footer = () => {
  return (
    <footer className="app-footer">
      
      <div className='footer-content-wrapper'>
          <div className='contact-info'>
              <h2>CONTACT US</h2>
              <ul>
              <li>Cell Phone</li>
              <li>+57 311 765 44 31</li>
              <li>Email</li>
              <li>Sercolgi1@gmail.com</li>
              </ul>
          </div>
          <div className='question_footer'>
              <h2>Frequently Asked Questions</h2>
              <h2>About Us</h2>
          </div>
      </div>
      <p className="footer-copyright">&copy; {new Date().getFullYear()} FLOWER FANTASY. All rights reserved.</p>
    </footer>
  );
};
export default Footer;