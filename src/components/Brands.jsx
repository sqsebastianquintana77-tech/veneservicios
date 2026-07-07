import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Brands = () => {
    const sectionRef = useScrollReveal();

    return (
        <section className="brands" id="marcas" ref={sectionRef}>
            <div className="container">
                <div className="brands-showcase fade-in">
                    <div className="brand-item" data-brand="ezviz">
                        <img src="/assets/images/Captura de pantalla_7-7-2026_135423_www.instagram.com.jpeg" alt="EZVIZ" className="brand-logo-img" />
                    </div>
                    <div className="brand-item" data-brand="hikvision">
                        <img src="/assets/images/Captura de pantalla_7-7-2026_135442_www.instagram.com.jpeg" alt="HIKVISION" className="brand-logo-img" />
                    </div>
                    <div className="brand-item" data-brand="dahua">
                        <img src="/assets/images/Captura de pantalla_7-7-2026_13551_www.instagram.com.jpeg" alt="DAHUA" className="brand-logo-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brands;
