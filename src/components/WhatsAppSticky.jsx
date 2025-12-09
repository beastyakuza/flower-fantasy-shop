import './WhatsAppSticky.css'; 

const WhatsAppSticky = ({ phoneNumber }) => {

    const whatsappLink = `https://wa.me/${573117654431}?text=Hola,%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20sus%20productos.`;

    return (
        <a 
    href={whatsappLink} 
    className="whatsapp-sticky" 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label="Chatear por WhatsApp"
>
    <img 
    className="whatsapp-icon-img"
    src="https://png.pngtree.com/element_our/png_detail/20181011/whatsapp-social-media-icon-design-template-vector-png_127011.png" 
    alt="WhatsApp Icono"  
    />
</a>
    );
};

export default WhatsAppSticky;