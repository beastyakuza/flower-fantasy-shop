import Header from './Header.jsx';
import Footer from './Footer.jsx';
import WhatsAppSticky from './WhatsAppSticky.jsx'; 

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      
      <main style={{ flexGrow: 1 }}>
        {children} 
      </main>
      
      <Footer />
      <WhatsAppSticky phoneNumber="573117654431" /> 
    </div>
  );
};
export default Layout;