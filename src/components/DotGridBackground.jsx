import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useSpring, animated } from '@react-spring/web';

const DotGridBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const containerRef = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    let rafId;
    const handleMouseMove = (e) => {
      // Throttle mouse updates using requestAnimationFrame
      if (rafId) return;
      
      rafId = requestAnimationFrame(() => {
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          });
        }
        rafId = null;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Grid configuration - increased spacing to reduce number of dots
  const dotSpacing = 60;
  
  const dots = useMemo(() => {
    const dotsArray = [];
    const cols = Math.ceil(dimensions.width / dotSpacing) + 2;
    const rows = Math.ceil(dimensions.height / dotSpacing) + 2;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        dotsArray.push({
          id: `${i}-${j}`,
          x: j * dotSpacing,
          y: i * dotSpacing,
        });
      }
    }
    return dotsArray;
  }, [dimensions.width, dimensions.height, dotSpacing]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ overflow: 'hidden' }}
    >
      {dots.map((dot) => (
        <AnimatedDot
          key={dot.id}
          dotX={dot.x}
          dotY={dot.y}
          mouseX={mousePos.x}
          mouseY={mousePos.y}
        />
      ))}
    </div>
  );
};

const AnimatedDot = ({ dotX, dotY, mouseX, mouseY }) => {
  // Calculate distance from dot to mouse
  const distance = Math.sqrt(
    Math.pow(mouseX - dotX, 2) + Math.pow(mouseY - dotY, 2)
  );

  // Maximum effect distance
  const maxDistance = 200;
  
  // Calculate intensity (0 to 1) based on distance
  const intensity = Math.max(0, 1 - distance / maxDistance);
  
  // Calculate direction vector from dot to mouse
  const dx = mouseX - dotX;
  const dy = mouseY - dotY;
  const angle = Math.atan2(dy, dx);

  // Calculate target values - increased movement for more dramatic effect
  const targetScale = 1 + intensity;
  const targetTranslateX = Math.cos(angle) * intensity * 30;
  const targetTranslateY = Math.sin(angle) * intensity * 30;
  const targetOpacity = 0.3 + intensity * 0.7;

  // Animate scale and position - optimized config for better performance
  const { scale, translateX, translateY, opacity } = useSpring({
    scale: targetScale,
    translateX: targetTranslateX,
    translateY: targetTranslateY,
    opacity: targetOpacity,
    config: { tension: 120, friction: 14 }, // Faster, more responsive
  });

  // Use a single transform that combines all values
  const [transform, setTransform] = useState('translate(-50%, -50%) scale(1)');

  useEffect(() => {
    const updateTransform = () => {
      const tx = translateX.get();
      const ty = translateY.get();
      const s = scale.get();
      setTransform(`translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(${s})`);
    };

    // Update on every frame for smooth animation
    let rafId;
    const loop = () => {
      updateTransform();
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [translateX, translateY, scale]);

  return (
    <animated.div
      className="absolute rounded-full bg-white"
      style={{
        left: `${dotX}px`,
        top: `${dotY}px`,
        width: '6px',
        height: '6px',
        transform,
        opacity,
        transformOrigin: 'center',
        willChange: 'transform, opacity',
      }}
    />
  );
};

export default DotGridBackground;
