// src/pages/Contact.jsx

import React from 'react';
import './Contact.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; 
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; 

const STORE_POSITION = [4.1750, -74.4500];

const Contact = () => {
    return (
        <div className="main-content-wrapper contact-page">
            <h1 className="contact-title">Let's Talk About Flowers and Fantasy</h1>
            <p className="contact-subtitle">
                Do you have questions about an order, need a custom design, or just want to say hello? We are here for you.
            </p>

            <div className="contact-container">
                <section className="contact-form-section">
                    <h2>Send Us a Message</h2>
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" name="subject" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="submit-button">Send Inquiry</button>
                    </form>
                </section>

                <section className="contact-info-section">
                    <h2>Contact Information</h2>
                    <div className="info-item">
                        <FaMapMarkerAlt className="info-icon" />
                        <p>
                            **Store Address** <br />
                            Ciudad de la furia 742 <br />
                            Chinauta, Cundinamarca 11001
                        </p>
                    </div>

                    <div className="info-item">
                        <FaPhone className="info-icon" />
                        <p>
                            **Phone Number** <br />
                            +57 311 765 44 31 <br />
                            (Monday to Saturday, 9:00 - 18:00)
                        </p>
                    </div>

                    <div className="info-item">
                        <FaEnvelope className="info-icon" />
                        <p>
                            **Email Address** <br />
                            contact@flowerfantasy.com
                        </p>
                    </div>
                    <div className="map-wrapper"> 
                        <MapContainer 
                            center={STORE_POSITION} 
                            zoom={13} 
                            scrollWheelZoom={false}
                            className="leaflet-map-container"
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={STORE_POSITION}>
                                <Popup>
                                    Flower Fantasy en Chinauta, Cundinamarca.
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>

                </section>
            </div>
        </div>
    );
};

export default Contact;