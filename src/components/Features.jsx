import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Features = () => {
    const sectionRef = useScrollReveal();

    return (
        <div ref={sectionRef}>
            {/* STATS SECTION */}
            <section className="stats-bar" id="nosotros">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item fade-in">
                            <div className="stat-number">10+</div>
                            <div className="stat-label">Años de Experiencia</div>
                        </div>
                        <div className="stat-item fade-in" style={{ transitionDelay: '0.1s' }}>
                            <div className="stat-number">500+</div>
                            <div className="stat-label">Instalaciones</div>
                        </div>
                        <div className="stat-item fade-in" style={{ transitionDelay: '0.2s' }}>
                            <div className="stat-number">3+</div>
                            <div className="stat-label">Marcas Premium</div>
                        </div>
                        <div className="stat-item fade-in" style={{ transitionDelay: '0.3s' }}>
                            <div className="stat-number">100%</div>
                            <div className="stat-label">Garantía</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES SECTION */}
            <section className="features-section">
                <div className="container">
                    <div className="section-header fade-in">
                        <h2 className="section-title">¿Por qué elegirnos?</h2>
                        <p className="section-subtitle">Garantizamos tranquilidad mediante trabajo profesional y equipos originales.</p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-item fade-in">
                            <div className="feature-icon-box">👷‍♂️</div>
                            <div className="feature-text">
                                <h4>Personal Capacitado</h4>
                                <p>Nuestros técnicos están constantemente actualizándose con las nuevas tecnologías del mercado.</p>
                            </div>
                        </div>

                        <div className="feature-item fade-in" style={{ transitionDelay: '0.1s' }}>
                            <div className="feature-icon-box">🛡️</div>
                            <div className="feature-text">
                                <h4>Equipos Originales</h4>
                                <p>Solo trabajamos con distribuidores oficiales para garantizar la calidad y garantía real.</p>
                            </div>
                        </div>

                        <div className="feature-item fade-in" style={{ transitionDelay: '0.2s' }}>
                            <div className="feature-icon-box">💬</div>
                            <div className="feature-text">
                                <h4>Soporte Post-Venta</h4>
                                <p>Te acompañamos y enseñamos a utilizar tus sistemas, y resolvemos tus dudas rápidamente.</p>
                            </div>
                        </div>

                        <div className="feature-item fade-in" style={{ transitionDelay: '0.3s' }}>
                            <div className="feature-icon-box">⚡</div>
                            <div className="feature-text">
                                <h4>Instalación Estética</h4>
                                <p>Cuidamos cada detalle, usando canalizaciones adecuadas para un acabado profesional y limpio.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;
