import { useEffect, useRef } from 'react';

interface CustomCursorProps {
  variant: string;
}

const CustomCursor = ({ variant }: CustomCursorProps) => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    
    if (!dot || !ring) return;

    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      dot.style.left = `${clientX}px`;
      dot.style.top = `${clientY}px`;
      
      // Add slight delay to ring for smooth effect
      setTimeout(() => {
        ring.style.left = `${clientX}px`;
        ring.style.top = `${clientY}px`;
      }, 50);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  useEffect(() => {
    const body = document.body;
    if (variant === 'hover') {
      body.classList.add('cursor-hover');
    } else {
      body.classList.remove('cursor-hover');
    }
  }, [variant]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
    </>
  );
};

export default CustomCursor;
