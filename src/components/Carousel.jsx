import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Carousel.css';
import { galleryImages } from '../data/images';

const Carousel = () => {
    const sectionRef = useScrollReveal();

    const half = Math.ceil(galleryImages.length / 2);
    const row1 = galleryImages.slice(0, half);
    const row2 = galleryImages.slice(half);

    return (
        <section className="gallery-section" id="galeria" ref={sectionRef}>
            <div className="container">
                <div className="section-header fade-in">
                    <h2 className="section-title">Amplia Variedad de Equipos</h2>
                    <p className="section-subtitle">Descubre todos los productos de seguridad y tecnología que tenemos disponibles para venta inmediata.</p>
                </div>
            </div>

            <div className="carousel-wrapper fade-in" style={{ transitionDelay: '0.2s' }}>
                <div className="carousel-track track-left">
                    {[...row1, ...row1, ...row1].map((img, i) => (
                        <div className="carousel-slide" key={`r1-${i}`}>
                            <img src={`/assets/images/${img}`} alt={`Producto de Seguridad ${i}`} loading="lazy" />
                        </div>
                    ))}
                </div>
                
                <div className="carousel-track track-right" style={{ marginTop: '24px' }}>
                    {[...row2, ...row2, ...row2].map((img, i) => (
                        <div className="carousel-slide" key={`r2-${i}`}>
                            <img src={`/assets/images/${img}`} alt={`Producto de Seguridad ${i}`} loading="lazy" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Carousel;
