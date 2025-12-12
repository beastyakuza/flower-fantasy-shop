import ImageSlider from '../components/ImageSlider';
import './Home.css';

const promoImages = [
    'https://concepto.de/wp-content/uploads/2018/08/Campos-de-mariposas-en-Israel-scaled-e1730740971423.jpg', 
    'https://img.freepik.com/foto-gratis/produccion-cultivo-flores-muchas-flores-crisantemo-invernadero-plantacion-crisantemo_158595-6963.jpg',   
    'https://bloglatam.jacto.com/wp-content/uploads/2022/04/produccion-de-flores-925x308.jpeg',      
];

const Home = () => {
    return (
        <div className="home-page-container">
            <ImageSlider images={promoImages} /> 
            
        </div>
    );
};

export default Home;