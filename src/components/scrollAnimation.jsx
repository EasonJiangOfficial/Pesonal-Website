import { useSpring, animated } from '@react-spring/web';
import React,{ useEffect, useState,} from 'react';

const ScrollFadeComponent = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const opacityProps = useSpring({
    opacity: scrollY / 500, // Adjust this value according to your needs
  });

  return <animated.div style={opacityProps}>{children}</animated.div>;
};

export default ScrollFadeComponent;
