import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const closeMenu = () => {
        setMenuActive(false);
    };

    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        closeMenu();
        const target = document.getElementById(sectionId);
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
            <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')}>
                <img src="/assets/images/logo_limpio_veneservicios.png" alt="Veneservicios JU Logo" className="navbar-logo" />
            </a>
            
            <ul className={`nav-menu ${menuActive ? 'active' : ''}`} id="navMenu">
                <li><a href="#hero" className="nav-link" onClick={(e) => scrollToSection(e, 'hero')}>Inicio</a></li>
                <li><a href="#catalogo" className="nav-link" onClick={(e) => scrollToSection(e, 'catalogo')}>Catálogo</a></li>
                <li><a href="#servicios" className="nav-link" onClick={(e) => scrollToSection(e, 'servicios')}>Servicios</a></li>
                <li><a href="#galeria" className="nav-link" onClick={(e) => scrollToSection(e, 'galeria')}>Equipos</a></li>
                <li><a href="#marcas" className="nav-link" onClick={(e) => scrollToSection(e, 'marcas')}>Marcas</a></li>
                <li><a href="#nosotros" className="nav-link" onClick={(e) => scrollToSection(e, 'nosotros')}>Nosotros</a></li>
                <li><a href="#contacto" className="nav-link btn-nav" onClick={(e) => scrollToSection(e, 'contacto')}>Contactar</a></li>
            </ul>

            <button className={`hamburger ${menuActive ? 'active' : ''}`} id="hamburger" aria-label="Menú" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    );
};

export default Navbar;
