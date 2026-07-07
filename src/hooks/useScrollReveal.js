import { useEffect, useRef } from 'react';

/**
 * Hook that observes all .fade-in elements inside `ref`
 * and adds the `visible` class when they scroll into view.
 */
const useScrollReveal = (options = {}) => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // fire only once
                }
            });
        }, {
            threshold: 0.08,
            rootMargin: '0px 0px -40px 0px',
            ...options
        });

        if (ref.current) {
            const elements = ref.current.querySelectorAll('.fade-in');
            elements.forEach(el => observer.observe(el));
        }

        return () => observer.disconnect();
    }, []);

    return ref;
};

export default useScrollReveal;
