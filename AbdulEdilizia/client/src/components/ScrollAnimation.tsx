import { ReactNode, useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'fade';
  delay?: number;
  className?: string;
}

export function ScrollAnimation({ 
  children, 
  animation = 'fade-up',
  delay = 0,
  className = '' 
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  const animationClass = isVisible ? `animate-on-scroll animate-${animation}` : 'opacity-0';
  const delayClass = delay > 0 ? `animation-delay-${delay}` : '';
  
  return (
    <div 
      ref={ref} 
      className={`${animationClass} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}
