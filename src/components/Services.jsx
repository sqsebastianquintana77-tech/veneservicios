import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Services = () => {
    const sectionRef = useScrollReveal();

    return (
        <section id="servicios" ref={sectionRef} style={{ background: 'var(--white)' }}>
            <div className="container">
                <div className="section-header fade-in">
                    <h2 className="section-title">Soluciones Integrales</h2>
                    <p className="section-subtitle">Ofrecemos servicios completos desde la asesoría inicial hasta el mantenimiento post-instalación.</p>
                </div>

                <div className="services-grid">
                    <div className="service-card fade-in">
                        <div className="service-icon">🎥</div>
                        <h3 className="service-title">Sistemas CCTV</h3>
                        <p className="service-desc">Instalación y configuración de cámaras de seguridad de alta definición para monitoreo 24/7 desde cualquier parte del mundo.</p>
                        <a href="#contacto" className="service-link">Solicitar cotización →</a>
                    </div>

                    <div className="service-card fade-in">
                        <div className="service-icon">⚡</div>
                        <h3 className="service-title">Cercos Eléctricos</h3>
                        <p className="service-desc">Protección perimetral disuasiva y efectiva para residencias, empresas y conjuntos cerrados con equipos certificados.</p>
                        <a href="#contacto" className="service-link">Saber más →</a>
                    </div>

                    <div className="service-card fade-in">
                        <div className="service-icon">🔐</div>
                        <h3 className="service-title">Control de Acceso</h3>
                        <p className="service-desc">Sistemas biométricos, cerraduras inteligentes y control de asistencia para restringir y monitorear áreas vitales.</p>
                        <a href="#contacto" className="service-link">Saber más →</a>
                    </div>

                    <div className="service-card fade-in">
                        <div className="service-icon">🌐</div>
                        <h3 className="service-title">Redes y Cableado</h3>
                        <p className="service-desc">Diseño e instalación de redes estructuradas, configuración de routers y optimización de conectividad WiFi.</p>
                        <a href="#contacto" className="service-link">Consultar proyecto →</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
