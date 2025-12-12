// src/components/ImageSlider.jsx (MODIFICADO)

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ImageSlider.css'; 


const ImageSlider = ({ images }) => { 
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();
    const totalImages = images.length;
    // ----------------------------------------------------------

    useEffect(() => {
        if (totalImages > 1) {
            const interval = setInterval(() => {
                setCurrentIndex(prevIndex => (prevIndex + 1) % totalImages);
            }, 5000); 

            return () => clearInterval(interval);
        }
    }, [totalImages]);

    const handleClick = () => {
        navigate('/products');
    };

    return (

        <div className="slider-container" onClick={handleClick}>
            {images.map((url, index) => (
                <img
                    key={index}
                    src={url} 
                    alt={`Slider Image ${index + 1}`}
                    className={`slider-image ${index === currentIndex ? 'active' : 'inactive'}`}
                />
            ))}
            
            <div className="slider-overlay">
                <h1>Flower Fantasy</h1>
                <p>Click to explore our unique collection</p>
            </div>
        </div>
    );
};

export default ImageSlider;