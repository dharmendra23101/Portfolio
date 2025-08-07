import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';

const SocialLinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--bg-card);
  color: var(--text-primary);
  font-size: 1.2rem;
  transition: all var(--transition-normal);
  border: 1px solid var(--border-color);
  
  &:hover {
    color: white;
    transform: translateY(-5px);
  }
  
  &.github:hover {
    background: #333;
  }
  
  &.linkedin:hover {
    background: #0077b5;
  }
  
  &.instagram:hover {
    background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
  }
  
  &.twitter:hover {
    background: #1da1f2;
  }
`;

const iconVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const SocialLinks = () => {
  return (
    <SocialLinksContainer>
      <SocialIcon 
        href="https://github.com/dharmendra23101" 
        target="_blank" 
        rel="noopener noreferrer"
        className="github"
        whileHover="hover"
        variants={iconVariants}
      >
        <FaGithub />
      </SocialIcon>
      
      <SocialIcon 
        href="https://linkedin.com/in/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="linkedin"
        whileHover="hover"
        variants={iconVariants}
      >
        <FaLinkedinIn />
      </SocialIcon>
      
      <SocialIcon 
        href="https://instagram.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="instagram"
        whileHover="hover"
        variants={iconVariants}
      >
        <FaInstagram />
      </SocialIcon>
      
      <SocialIcon 
        href="https://twitter.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="twitter"
        whileHover="hover"
        variants={iconVariants}
      >
        <FaTwitter />
      </SocialIcon>
    </SocialLinksContainer>
  );
};

export default SocialLinks;