import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const CharacterContainer = styled(motion.div)`
  position: absolute;
  right: 5%;
  bottom: 10%;
  width: 180px;
  height: 180px;
  z-index: 2;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const HeroCharacter = () => {
  return (
    <CharacterContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: 1.5,
        ease: "easeOut"
      }}
    >
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Head */}
        <motion.circle 
          cx="100" 
          cy="70" 
          r="50" 
          fill="#6e57ff" 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        />
        
        {/* Face */}
        <motion.circle 
          cx="80" 
          cy="60" 
          r="6" 
          fill="#ffffff" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 2.2 }}
        />
        <motion.circle 
          cx="120" 
          cy="60" 
          r="6" 
          fill="#ffffff" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 2.2 }}
        />
        
        {/* Smile */}
        <motion.path
          d="M85 85 Q100 100 115 85"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        />
        
        {/* Body */}
        <motion.rect
          x="70"
          y="120"
          width="60"
          height="60"
          rx="10"
          fill="#4d3ff5"
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 120, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        />
        
        {/* Arms */}
        <motion.line
          x1="70"
          y1="130"
          x2="40"
          y2="110"
          stroke="#4d3ff5"
          strokeWidth="10"
          strokeLinecap="round"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.3 }}
        />
        <motion.line
          x1="130"
          y1="130"
          x2="160"
          y2="110"
          stroke="#4d3ff5"
          strokeWidth="10"
          strokeLinecap="round"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.3 }}
        />
        
        {/* Hand waving animation */}
        <motion.line
          x1="160"
          y1="110"
          x2="175"
          y2="90"
          stroke="#4d3ff5"
          strokeWidth="10"
          strokeLinecap="round"
          animate={{ 
            rotate: [0, 15, 0, 15, 0]
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1]
          }}
          style={{ originX: "160px", originY: "110px" }}
        />
      </motion.svg>
    </CharacterContainer>
  );
};

export default HeroCharacter;