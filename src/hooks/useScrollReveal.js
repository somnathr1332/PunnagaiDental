import { useEffect, useRef } from 'react';

export function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

export function useScrollRevealAll(selector = '.reveal', threshold = 0.12, dependencies = []) {
  useEffect(() => {
    // Wait for the DOM to update before querying elements
    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll(selector);
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold }
      );

      elements.forEach((el) => observer.observe(el));
      
      // Cleanup observer on unmount or when dependencies change
      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [selector, threshold, ...dependencies]);
}
