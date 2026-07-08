import React, { useRef, useState, useCallback } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Carousel.css';
import { galleryImages } from '../data/images';

const Carousel = () => {
    const sectionRef = useScrollReveal();

    const half = Math.ceil(galleryImages.length / 2);
    const row1 = galleryImages.slice(0, half);
    const row2 = galleryImages.slice(half);

    // ── Pause state ──────────────────────────────────────────────
    const [paused, setPaused] = useState(false);

    // ── Drag / swipe state ───────────────────────────────────────
    const track1Ref = useRef(null);
    const track2Ref = useRef(null);
    const dragState = useRef({
        active: false,
        startX: 0,
        offset1: 0,   // accumulated drag offset for row1
        offset2: 0,   // accumulated drag offset for row2
        lastX: 0,
        velocity: 0,
    });

    // Helper: read current translateX from an element's transform
    const getTranslateX = (el) => {
        if (!el) return 0;
        const style = window.getComputedStyle(el);
        const matrix = new WebKitCSSMatrix(style.transform);
        return matrix.m41;
    };

    const startDrag = useCallback((clientX) => {
        const ds = dragState.current;
        ds.active = true;
        ds.startX = clientX;
        ds.lastX = clientX;
        ds.velocity = 0;

        // Snapshot the live animated position so dragging starts from there
        ds.offset1 = getTranslateX(track1Ref.current);
        ds.offset2 = getTranslateX(track2Ref.current);

        // Freeze the CSS animation mid‑frame
        if (track1Ref.current) {
            track1Ref.current.style.animationPlayState = 'paused';
            track1Ref.current.style.transform = `translateX(${ds.offset1}px)`;
        }
        if (track2Ref.current) {
            track2Ref.current.style.animationPlayState = 'paused';
            track2Ref.current.style.transform = `translateX(${ds.offset2}px)`;
        }
        setPaused(true);
    }, []);

    const moveDrag = useCallback((clientX) => {
        const ds = dragState.current;
        if (!ds.active) return;
        const delta = clientX - ds.startX;
        ds.velocity = clientX - ds.lastX;
        ds.lastX = clientX;

        if (track1Ref.current)
            track1Ref.current.style.transform = `translateX(${ds.offset1 + delta}px)`;
        if (track2Ref.current)
            track2Ref.current.style.transform = `translateX(${ds.offset2 - delta}px)`;
    }, []);

    const endDrag = useCallback(() => {
        const ds = dragState.current;
        if (!ds.active) return;
        ds.active = false;

        // Small momentum flick
        const flick = ds.velocity * 6;
        const newO1 = (ds.offset1 + (dragState.current.lastX - ds.startX) + flick);
        const newO2 = (ds.offset2 - (dragState.current.lastX - ds.startX) - flick);

        if (track1Ref.current) {
            track1Ref.current.style.transition = 'transform 0.4s ease-out';
            track1Ref.current.style.transform = `translateX(${newO1}px)`;
        }
        if (track2Ref.current) {
            track2Ref.current.style.transition = 'transform 0.4s ease-out';
            track2Ref.current.style.transform = `translateX(${newO2}px)`;
        }

        // Resume animation after the flick settles
        setTimeout(() => {
            if (track1Ref.current) {
                track1Ref.current.style.transition = '';
                track1Ref.current.style.transform = '';
                track1Ref.current.style.animationPlayState = 'running';
            }
            if (track2Ref.current) {
                track2Ref.current.style.transition = '';
                track2Ref.current.style.transform = '';
                track2Ref.current.style.animationPlayState = 'running';
            }
            setPaused(false);
        }, 420);
    }, []);

    // ── Touch handlers ───────────────────────────────────────────
    const onTouchStart = (e) => startDrag(e.touches[0].clientX);
    const onTouchMove  = (e) => { e.preventDefault(); moveDrag(e.touches[0].clientX); };
    const onTouchEnd   = () => endDrag();

    // ── Mouse handlers (desktop drag) ────────────────────────────
    const onMouseDown  = (e) => startDrag(e.clientX);
    const onMouseMove  = (e) => { if (dragState.current.active) moveDrag(e.clientX); };
    const onMouseUp    = () => endDrag();
    const onMouseLeave = () => { if (dragState.current.active) endDrag(); };

    const trackClass1 = `carousel-track track-left${paused ? ' paused' : ''}`;
    const trackClass2 = `carousel-track track-right${paused ? ' paused' : ''}`;

    return (
        <section className="gallery-section" id="galeria" ref={sectionRef}>
            <div className="container">
                <div className="section-header fade-in">
                    <h2 className="section-title">Amplia Variedad de Equipos</h2>
                    <p className="section-subtitle">Descubre todos los productos de seguridad y tecnología que tenemos disponibles para venta inmediata.</p>
                </div>
            </div>

            {/* Swipe hint badge — mobile only */}
            <p className="carousel-hint">👆 Toca para pausar · Desliza para explorar</p>

            <div
                className="carousel-wrapper fade-in"
                style={{ transitionDelay: '0.2s' }}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseLeave}
            >
                <div className={trackClass1} ref={track1Ref}>
                    {[...row1, ...row1, ...row1].map((img, i) => (
                        <div className="carousel-slide" key={`r1-${i}`}>
                            <img src={`/assets/images/${img}`} alt={`Producto de Seguridad ${i}`} loading="lazy" draggable="false" />
                        </div>
                    ))}
                </div>

                <div className={trackClass2} ref={track2Ref} style={{ marginTop: '24px' }}>
                    {[...row2, ...row2, ...row2].map((img, i) => (
                        <div className="carousel-slide" key={`r2-${i}`}>
                            <img src={`/assets/images/${img}`} alt={`Producto de Seguridad ${i}`} loading="lazy" draggable="false" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Carousel;
