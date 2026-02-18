import { useEffect, useState, useRef } from 'react';

interface UseAnimatedCounterProps {
    end: number;
    duration?: number;
    start?: number;
}

export function useAnimatedCounter({ end, duration = 2000, start = 0 }: UseAnimatedCounterProps) {
    const [count, setCount] = useState(start);
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLElement | null>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated.current) {
                        setIsVisible(true);
                        hasAnimated.current = true;
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuad = (t: number) => t * (2 - t);
            const currentCount = Math.floor(start + (end - start) * easeOutQuad(progress));

            setCount(currentCount);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, end, start, duration]);

    return { count, elementRef };
}
