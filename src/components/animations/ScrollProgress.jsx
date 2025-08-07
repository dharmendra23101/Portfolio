import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import styled from 'styled-components';

const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--primary);
  transform-origin: 0%;
  z-index: 101;
`;

const ScrollIndicator = styled(motion.div)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(110, 87, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  color: var(--primary);
  font-weight: bold;
  backdrop-filter: blur(4px);
  
  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    font-size: 0.8rem;
  }
`;

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    // Using the recommended .on("change") approach instead of .onChange()
    const unsubscribe = scrollYProgress.on("change", (value) => {
      setScrollPercentage(Math.round(value * 100));
    });
    
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>
      <ProgressBar style={{ scaleX: scrollYProgress }} />
      <ScrollIndicator
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        {scrollPercentage}%
      </ScrollIndicator>
    </>
  );
};

export default ScrollProgress;