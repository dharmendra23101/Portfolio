import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const FloatingContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FloatingIcon = ({ children, delay = 0, duration = 3, yOffset = 15 }) => {
  return (
    <FloatingContainer
      initial={{ y: 0 }}
      animate={{ 
        y: [-yOffset/2, yOffset/2, -yOffset/2]
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </FloatingContainer>
  );
};

export default FloatingIcon;