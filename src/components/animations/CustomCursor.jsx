import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const CursorRing = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  border: 2px solid var(--primary);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
`;

const CursorDot = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  background-color: var(--primary);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
`;

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    const handleLinkHover = () => setCursorVariant('link');
    const handleLinkLeave = () => setCursorVariant('default');
    
    window.addEventListener('mousemove', mouseMove);
    
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkLeave);
    });
    
    return () => {
      window.removeEventListener('mousemove', mouseMove);
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);
  
  const variants = {
    default: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      transition: {
        type: 'spring',
        mass: 0.6
      }
    },
    link: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      scale: 1.5,
      backgroundColor: 'rgba(255, 255, 255, 0)',
      transition: {
        type: 'spring',
        mass: 0.6
      }
    }
  };
  
  const dotVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      transition: {
        type: 'spring',
        mass: 0.1
      }
    },
    link: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 0,
      transition: {
        type: 'spring',
        mass: 0.1
      }
    }
  };
  
  // Only show custom cursor on desktop
  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null;
  }
  
  return (
    <>
      <CursorRing
        variants={variants}
        animate={cursorVariant}
      />
      <CursorDot
        variants={dotVariants}
        animate={cursorVariant}
      />
    </>
  );
};

export default CustomCursor;