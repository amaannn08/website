// Utility: Intersection Observer scroll-reveal hook
import { useEffect, useRef } from 'react';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('animate-fade-in-up', 'revealed');
          el.classList.remove('reveal');
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, ...options }
    );

    el.classList.add('reveal');
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}
