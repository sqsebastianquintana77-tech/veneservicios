import React, { useEffect, useRef } from 'react';

const Hero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        // Hero is always visible on load — add visible immediately
        if (heroRef.current) {
            const fadeElements = heroRef.current.querySelectorAll('.fade-in');
            // Small delay so CSS transition plays
            requestAnimationFrame(() => {
                fadeElements.forEach((el, i) => {
                    setTimeout(() => el.classList.add('visible'), i * 150);
                });
            });
        }
    }, []);

    return (
        <section className="hero" id="hero" ref={heroRef}>
            <div className="container hero-container">
                <div className="hero-content fade-in">
                    <div className="hero-badge">🏆 Líderes en Seguridad Tecnológica desde 2014</div>
                    
                    <h1 className="hero-title">Protegemos Lo Que Más Importa</h1>
                    
                    <p className="hero-subtitle">
                        Especialistas en sistemas de videovigilancia, control de acceso, cercos eléctricos y redes. Marcas premium EZVIZ, HIKVISION y DAHUA con instalación profesional garantizada.
                    </p>
                    
                    <div className="hero-ctas">
                        <a href="#catalogo" className="btn-hero-primary">Ver Catálogo de Productos →</a>
                        <a href="#contacto" className="btn-hero-secondary">Contactar Ahora</a>
                    </div>
                    
                    <div className="hero-trust">
                        <div className="trust-item">✓ RIF: J-31463993-5</div>
                        <div className="trust-item">⭐ +10 Años de Experiencia</div>
                        <div className="trust-item">🔒 Garantía Oficial</div>
                    </div>
                </div>
                
                <div className="hero-image fade-in" style={{ transitionDelay: '0.2s' }}>
                    <img src="/assets/images/Captura de pantalla_7-7-2026_13498_www.instagram.com.jpeg" alt="Sistemas de Seguridad" className="hero-image-main" style={{ borderRadius: 'var(--radius-xl)' }} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
