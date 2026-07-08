import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const brands = [
    { key: 'ezviz',     src: '/assets/images/ezvis_logo.png',      alt: 'EZVIZ'    },
    { key: 'hikvision', src: '/assets/images/Hikvision_logo.webp',  alt: 'HIKVISION'},
    { key: 'dahua',     src: '/assets/images/dahua_logo.jpg',       alt: 'DAHUA'   },
    { key: 'hilook',    src: '/assets/images/hilook_logo.png',      alt: 'HiLook'  },
    { key: 'axis',      src: '/assets/images/axis_logo.jpg',        alt: 'AXIS'    },
];

const Brands = () => {
    const sectionRef = useScrollReveal();

    return (
        <section className="brands" id="marcas" ref={sectionRef}>
            <div className="brands-header fade-in">
                <span className="brands-label">Marcas Oficiales</span>
                <h2 className="brands-title">Trabajamos con los mejores del mundo</h2>
            </div>

            <div className="brands-showcase">
                {brands.map((brand, i) => (
                    <div
                        className="brand-item fade-in"
                        data-brand={brand.key}
                        key={brand.key}
                        style={{ transitionDelay: `${i * 0.12}s` }}
                    >
                        <img
                            src={brand.src}
                            alt={brand.alt}
                            className="brand-logo-img"
                            loading="lazy"
                        />
                        <span className="brand-name">{brand.alt}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Brands;
