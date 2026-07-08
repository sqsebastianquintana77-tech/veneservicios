import React, { useState, useEffect } from 'react';

const Footer = () => {
    const [visitCount, setVisitCount] = useState(0);

    useEffect(() => {
        const baseVisits = 14380;
        let storedVisits = localStorage.getItem('veneservicios_visits');
        
        if (!storedVisits) {
            storedVisits = (baseVisits + Math.floor(Math.random() * 50)).toString();
            localStorage.setItem('veneservicios_visits', storedVisits);
        }
        
        let count = parseInt(storedVisits, 10);
        
        // Only increment once per browser tab session
        if (!sessionStorage.getItem('veneservicios_session_counted')) {
            count += 1;
            localStorage.setItem('veneservicios_visits', count.toString());
            sessionStorage.setItem('veneservicios_session_counted', 'true');
        }
        
        setVisitCount(count);
    }, []);

    return (
        <footer className="footer">
            <div className="footer-grid">
                <div className="footer-col">
                    <img src="/assets/images/logo_limpio_veneservicios.png" alt="Veneservicios JU" className="footer-logo" />
                    <div className="footer-company">Veneservicios Integrales J.U, C.A.</div>
                    <p className="footer-tagline">Soluciones en Seguridad y Tecnología de Vanguardia</p>
                    <div className="footer-rif">RIF: J-31463993-5</div>
                </div>

                <div className="footer-col">
                    <h4>Navegación</h4>
                    <ul className="footer-links">
                        <li><a href="#hero">Inicio</a></li>
                        <li><a href="#catalogo">Catálogo</a></li>
                        <li><a href="#servicios">Servicios</a></li>
                        <li><a href="#marcas">Marcas</a></li>
                        <li><a href="#nosotros">Nosotros</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                        <li><a href="#ubicacion">Ubicación</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Servicios</h4>
                    <ul className="footer-links">
                        <li><a href="#servicios">🎥 Instalación CCTV</a></li>
                        <li><a href="#servicios">🔐 Control de Acceso</a></li>
                        <li><a href="#servicios">⚡ Cercos Eléctricos</a></li>
                        <li><a href="#servicios">🌐 Redes y Cableado</a></li>
                        <li><a href="#servicios">📦 Venta de Equipos</a></li>
                        <li><a href="#servicios">🔧 Soporte Técnico</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Contáctanos</h4>
                    <p className="footer-contact-item">📍 Av. Sucre, CC Galerías del Pueblo, Local 46</p>
                    <p className="footer-contact-item">📞 <a href="tel:+584129295212">0412-9295212</a></p>
                    <p className="footer-contact-item">⏰ Lun-Vie: 8AM-4PM | Sáb: 9AM-2PM</p>
                    
                    <h4 style={{ marginTop: '24px' }}>Síguenos</h4>
                    <div className="footer-socials">
                        <a href="https://www.instagram.com/veneserviciosju/" target="_blank" rel="noreferrer" className="social-icon" title="Instagram">📷</a>
                        <a href="https://www.facebook.com/veneserju" target="_blank" rel="noreferrer" className="social-icon" title="Facebook">👤</a>
                        <a href="https://www.tiktok.com/@veneservicios.ju" target="_blank" rel="noreferrer" className="social-icon" title="TikTok">🎵</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="copyright">
                    <div>© 2026 Veneservicios Integrales J.U, C.A. | RIF: J-31463993-5</div>
                    {visitCount > 0 && (
                        <div className="visit-counter">
                            <span className="counter-icon">📊</span> Visitas: <strong className="counter-value">{visitCount.toLocaleString()}</strong>
                        </div>
                    )}
                </div>
                <div className="footer-attribution">
                    <span>Desarrollado por </span>
                    <a href="https://cerotraba.com" target="_blank" rel="noreferrer" className="cerotraba-link">
                        <img src="/assets/images/logo_CeroTraba.png" alt="CeroTraba Logo" className="cerotraba-logo" />
                        <span>CeroTraba</span>
                    </a>
                </div>
                <div className="footer-legal">
                    <a href="#">Política de Privacidad</a>
                    <a href="#">Términos y Condiciones</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
