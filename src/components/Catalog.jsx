import React, { useState, useEffect, useRef } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const products = [
    {
        id: 1,
        category: 'camaras',
        badge: '⭐ Destacado',
        badgeClass: 'badge-destacado',
        brand: 'EZVIZ',
        name: 'Cámara Inteligente Doble Lente Exterior',
        specs: ['Visión panorámica 360°', 'Tecnología Dual-Lens', 'Detección humana IA', 'Audio bidireccional'],
        image: '/assets/images/Captura de pantalla_7-7-2026_135210_www.instagram.com.jpeg'
    },
    {
        id: 2,
        category: 'camaras',
        badge: 'Nuevo',
        badgeClass: 'badge-nuevo',
        brand: 'EZVIZ',
        name: 'Cámara H6C PRO Interior',
        specs: ['Resolución hasta 8MP', 'Vista panorámica 360°', 'Detección inteligente', 'Ideal para interiores'],
        image: '/assets/images/Captura de pantalla_7-7-2026_135233_www.instagram.com.jpeg'
    },
    {
        id: 3,
        category: 'camaras',
        badge: '🏆 Premium',
        badgeClass: 'badge-premium',
        brand: 'EZVIZ',
        name: 'Cámara H9c Dual-Lens 3K Ultra HD',
        specs: ['Resolución 3K (5MP+3MP)', 'Ultra Alta Definición', 'Cobertura total 360°', 'Para exteriores exigentes'],
        image: '/assets/images/Captura de pantalla_7-7-2026_135318_www.instagram.com.jpeg'
    },
    {
        id: 4,
        category: 'cercos',
        badge: '⚡ Potente',
        badgeClass: 'badge-potente',
        brand: 'HIKVISION',
        name: 'Energizador para Cerco Eléctrico',
        specs: ['Alto voltaje disuasivo', 'Batería de respaldo 12V', 'Control remoto incluido', 'Sirena de pánico'],
        image: '/assets/images/Captura de pantalla_7-7-2026_13533_www.instagram.com.jpeg'
    },
    {
        id: 5,
        category: 'acceso',
        badge: 'Versátil',
        badgeClass: 'badge-flexible',
        brand: 'DAHUA',
        name: 'Control de Acceso Biométrico',
        specs: ['Huella dactilar', 'Tarjeta RFID', 'Clave numérica', 'Reportes de asistencia'],
        image: '/assets/images/Captura de pantalla_7-7-2026_135340_www.instagram.com.jpeg'
    }
];

const Catalog = () => {
    const [filter, setFilter] = useState('all');
    const sectionRef = useScrollReveal();

    const filteredProducts = products.filter(p => filter === 'all' || p.category === filter);

    return (
        <section className="catalog" id="catalogo" ref={sectionRef}>
            <div className="container">
                <div className="section-header fade-in">
                    <h2 className="section-title">Nuestros Productos Destacados</h2>
                    <p className="section-subtitle">Equipamiento de última generación de líderes mundiales en seguridad tecnológica</p>
                </div>

                <div className="filters-container fade-in">
                    <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>Todos</button>
                    <button className={`filter-btn ${filter === 'camaras' ? 'active' : ''}`} onClick={() => setFilter('camaras')}>🎥 Cámaras CCTV</button>
                    <button className={`filter-btn ${filter === 'acceso' ? 'active' : ''}`} onClick={() => setFilter('acceso')}>🔐 Control de Acceso</button>
                    <button className={`filter-btn ${filter === 'monitores' ? 'active' : ''}`} onClick={() => setFilter('monitores')}>🖥️ Monitores</button>
                    <button className={`filter-btn ${filter === 'cercos' ? 'active' : ''}`} onClick={() => setFilter('cercos')}>⚡ Cercos Eléctricos</button>
                </div>

                <div className="products-grid">
                    {filteredProducts.map(product => (
                        <div className="product-card fade-in" key={product.id}>
                            <span className={`product-badge ${product.badgeClass}`}>{product.badge}</span>
                            <div className="product-image-wrapper">
                                <img src={product.image} alt={product.name} className="product-image" />
                            </div>
                            <div className="product-info">
                                <span className="product-brand">{product.brand}</span>
                                <h3 className="product-name">{product.name}</h3>
                                <ul className="product-specs">
                                    {product.specs.map((spec, i) => (
                                        <li key={i}>{spec}</li>
                                    ))}
                                </ul>
                                <button className="btn-product">Consultar Precio 💬</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Catalog;
