// src/pages/About.jsx

import React from 'react';
import './About.css'; // Vamos a crear este archivo de estilos

const About = () => {
    return (
        <div className="main-content-wrapper about-page">
            <h1 className="about-title">Nuestra Pasión Florece Contigo</h1>
            <div className="about-content-container">
                
                {/* Columna 1: Misión y Filosofía */}
                <section className="about-section mission-section">
                    <h2>💐 Nuestra Misión</h2>
                    <p>
                        En **FLOWER FANTASY**, creemos que cada flor cuenta una historia. 
                        Nuestra misión es llevar la **belleza, el aroma y la emoción** de la naturaleza directamente a tu hogar. 
                        Seleccionamos meticulosamente cada tallo, asegurando frescura y la más alta calidad en cada arreglo floral.
                    </p>
                    <p>
                        No solo vendemos flores; creamos **momentos inolvidables** y celebramos la fantasía que solo un ramo perfectamente diseñado puede ofrecer.
                    </p>
                </section>

                {/* Columna 2: Calidad y Compromiso */}
                <section className="about-section quality-section">
                    <h2>✨ Calidad y Compromiso</h2>
                    <p>
                        Trabajamos directamente con cultivadores locales e internacionales para garantizar la **longevidad y vitalidad** de cada flor.
                        Desde la rosa clásica hasta las exóticas hortensias, nuestra colección es un testimonio de la dedicación al arte floral.
                    </p>
                    <ul>
                        <li>Selección manual de tallos.</li>
                        <li>Diseños únicos y personalizados.</li>
                        <li>Entrega rápida y cuidadosa.</li>
                        <li>Compromiso con la sostenibilidad.</li>
                    </ul>
                </section>
                
                {/* Puedes añadir una imagen aquí si tienes una URL: 
                <div className="about-image-wrapper">
                    <img src="/images/flowers_about.jpg" alt="Equipo Flower Fantasy" />
                </div>
                */}
            </div>
        </div>
    );
};

export default About;