import React, { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Contact = () => {
    const sectionRef = useScrollReveal();
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        servicio: '',
        mensaje: '',
        terminos: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.nombre || !formData.telefono || !formData.servicio || !formData.mensaje) {
            alert('Por favor completa todos los campos obligatorios.');
            return;
        }

        if (!formData.terminos) {
            alert('Debes aceptar los términos y condiciones.');
            return;
        }

        const phoneRegex = /^04(?:1[2468]|2[1246])\d{7}$/;
        if (!phoneRegex.test(formData.telefono.replace(/[-\s]/g, ''))) {
            alert('Por favor ingresa un número de teléfono válido (ej: 0412-1234567)');
            return;
        }

        alert('¡Mensaje enviado con éxito! Te contactaremos pronto.');
        setFormData({ nombre: '', telefono: '', servicio: '', mensaje: '', terminos: false });
    };

    return (
        <div ref={sectionRef}>
            <section className="contact" id="contacto">
                <div className="container">
                    <div className="contact-wrapper">
                        <div className="contact-info fade-in">
                            <h2>¡Hablemos de tu Proyecto!</h2>
                            <p>Nuestro equipo de expertos está listo para asesorarte en la mejor solución de seguridad para ti.</p>

                            <div className="info-item">
                                <div className="info-icon">📞</div>
                                <div className="info-text">
                                    <label>Teléfono / WhatsApp</label>
                                    <a href="tel:+584129295212">0412-9295212</a>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">📍</div>
                                <div className="info-text">
                                    <label>Ubicación</label>
                                    <p>Av. Sucre de Catia, CC Galerías del Pueblo, Local 46. Caracas, Venezuela.</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">⏰</div>
                                <div className="info-text">
                                    <label>Horario</label>
                                    <p>Lunes a Viernes: 8:00 AM - 4:00 PM<br />Sábados: 9:00 AM - 2:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-wrapper fade-in" style={{ transitionDelay: '0.15s' }}>
                            <h3>Solicitar Cotización</h3>
                            <p>Completa el formulario y te contactaremos a la brevedad.</p>

                            <form id="contactForm" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="nombre">Nombre o Empresa *</label>
                                    <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Ej. Juan Pérez" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="telefono">Teléfono (WhatsApp) *</label>
                                    <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="Ej. 0412-1234567" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="servicio">Servicio de Interés *</label>
                                    <select id="servicio" name="servicio" value={formData.servicio} onChange={handleChange} required>
                                        <option value="" disabled>Seleccione una opción...</option>
                                        <option value="cctv">Instalación CCTV</option>
                                        <option value="cercos">Cercos Eléctricos</option>
                                        <option value="acceso">Control de Acceso</option>
                                        <option value="redes">Redes y Cableado</option>
                                        <option value="equipos">Compra de Equipos</option>
                                        <option value="mantenimiento">Mantenimiento/Soporte</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="mensaje">Mensaje / Detalles *</label>
                                    <textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange} placeholder="Cuéntanos qué necesitas..." required></textarea>
                                </div>

                                <div className="checkbox-group">
                                    <input type="checkbox" id="terminos" name="terminos" checked={formData.terminos} onChange={handleChange} required />
                                    <label htmlFor="terminos">Acepto la <a href="#">política de privacidad</a> y consiento que Veneservicios JU me contacte.</label>
                                </div>

                                <button type="submit" className="btn-submit">📨 ENVIAR MENSAJE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* GOOGLE MAPS SECTION */}
            <section className="map-section" id="ubicacion">
                <div className="container">
                    <div className="section-header fade-in">
                        <h2 className="section-title">Encuéntranos Aquí</h2>
                        <p className="section-subtitle">Visita nuestra tienda física para ver los equipos en exhibición y recibir asesoría personalizada en tiempo real.</p>
                    </div>
                    
                    <div className="map-card fade-in" style={{ transitionDelay: '0.2s' }}>
                        <div className="map-container">
                            <iframe
                                src="https://maps.google.com/maps?q=Centro+Comercial+Galerias+El+Pueblo,Av+Sucre,Catia,Caracas,Venezuela&t=&z=16&ie=UTF8&iwloc=&output=embed"
                                className="map-iframe"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación de Veneservicios JU - CC Galerías del Pueblo, Catia, Caracas">
                            </iframe>
                            
                            <a href="https://maps.app.goo.gl/ikdrJs88dwhQWJcH6" target="_blank" rel="noreferrer" className="map-overlay">
                                <div className="map-icon">📍</div>
                                <div className="map-text">
                                    Abrir en Google Maps
                                    <small>Ver indicaciones para llegar</small>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
