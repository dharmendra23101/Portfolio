import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import SocialLinks from './SocialLinks';

const FooterContainer = styled.footer`
  background: var(--bg-darker);
  border-top: 1px solid var(--border-color);
  padding: 4rem 0 2rem;
  position: relative;
  overflow: hidden;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterLogo = styled.div`
  font-family: var(--font-primary);
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  span {
    color: var(--primary);
  }
`;

const FooterDesc = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  max-width: 300px;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const FooterNavTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 40px;
    height: 2px;
    background: var(--primary);
    
    @media (max-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const FooterNav = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const FooterNavItem = styled.li`
  a {
    color: var(--text-secondary);
    transition: all var(--transition-normal);
    display: inline-block;
    
    &:hover {
      color: var(--primary);
      transform: translateX(5px);
      
      @media (max-width: 768px) {
        transform: none;
      }
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
  color: var(--text-secondary);
  font-size: 0.9rem;
  
  .heart {
    color: var(--accent);
    display: inline-block;
    margin: 0 0.25rem;
    animation: heartbeat 1.5s infinite;
  }
  
  @keyframes heartbeat {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
  }
`;

const BackToTop = styled(motion.div)`
  position: absolute;
  bottom: 6rem;
  right: 2rem;
  width: 45px;
  height: 45px;
  background: var(--primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-normal);
  box-shadow: 0 4px 10px rgba(110, 87, 255, 0.3);
  
  &:hover {
    background: var(--primary-dark);
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(110, 87, 255, 0.4);
  }
  
  svg {
    font-size: 1.2rem;
  }
  
  @media (max-width: 768px) {
    right: 1rem;
  }
`;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <div>
            <FooterLogo>
              <span>D</span>harmendra<span>.</span>
            </FooterLogo>
            <FooterDesc>
              A passionate Full Stack Developer and Competitive Programmer, crafting elegant digital experiences.
            </FooterDesc>
            <SocialLinks />
          </div>
          
          <div>
            <FooterNavTitle>Quick Links</FooterNavTitle>
            <FooterNav>
              <FooterNavItem><a href="#home">Home</a></FooterNavItem>
              <FooterNavItem><a href="#about">About</a></FooterNavItem>
              <FooterNavItem><a href="#skills">Skills</a></FooterNavItem>
              <FooterNavItem><a href="#projects">Projects</a></FooterNavItem>
              <FooterNavItem><a href="#education">Education</a></FooterNavItem>
              <FooterNavItem><a href="#contact">Contact</a></FooterNavItem>
            </FooterNav>
          </div>
          
          <div>
            <FooterNavTitle>Contact Info</FooterNavTitle>
            <FooterNav>
              <FooterNavItem>Naya Raipur, Chhattisgarh, India</FooterNavItem>
              <FooterNavItem>
                <a href="mailto:dharmendra23101@gmail.com">dharmendra23101@gmail.com</a>
              </FooterNavItem>
              <FooterNavItem>
                <a href="tel:+91-9893xxxxxx">+91-9893xxxxxx</a>
              </FooterNavItem>
            </FooterNav>
          </div>
        </FooterContent>
        
        <Copyright>
          <p>
            © {new Date().getFullYear()} Dharmendra Dhruw. All Rights Reserved. Made with 
            <span className="heart"><FaHeart /></span> 
            in India
          </p>
        </Copyright>
        
        <BackToTop
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </BackToTop>
      </div>
    </FooterContainer>
  );
};

export default Footer;