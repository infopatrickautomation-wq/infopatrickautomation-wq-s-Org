import { useEffect, useRef } from 'react';

interface UseScrollAnimationOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

export function useScrollAnimation(
    options: UseScrollAnimationOptions = {}
) {
    const {
        threshold = 0.1,
        rootMargin = '0px 0px -100px 0px',
        triggerOnce = true
    } = options;

    const elementRef = useRef<HTMLElement | null>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (!hasAnimated.current || !triggerOnce) {
                            entry.target.classList.add('fade-in-up');
                            if (triggerOnce) {
                                hasAnimated.current = true;
                            }
                        }
                    }
                });
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [threshold, rootMargin, triggerOnce]);

    return elementRef;
}
