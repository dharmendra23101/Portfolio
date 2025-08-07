import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  display: flex;
  align-items: center;
  z-index: 100;
  backdrop-filter: blur(8px);
  background: rgba(10, 11, 16, 0.8);
  transition: all var(--transition-normal);
  border-bottom: 1px solid var(--border-color);
  
  &.scrolled {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    height: 70px;
  }
  
  @media (max-width: 768px) {
    height: 70px;
    
    &.scrolled {
      height: 60px;
    }
  }
  
  @media (max-width: 480px) {
    height: 60px;
    
    &.scrolled {
      height: 50px;
    }
  }
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  
  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`;

const Logo = styled.div`
  font-family: var(--font-primary);
  font-size: 1.8rem;
  font-weight: 700;
  
  span {
    color: var(--primary);
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2.5rem;
  
  @media (max-width: 992px) {
    gap: 1.5rem;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-family: var(--font-primary);
  font-weight: 500;
  position: relative;
  transition: all var(--transition-normal);
  
  &:hover {
    color: var(--primary);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary);
    transition: all var(--transition-normal);
  }
  
  &:hover::after {
    width: 100%;
  }
  
  &.active {
    color: var(--primary);
    
    &::after {
      width: 100%;
    }
  }
`;

const MobileMenuToggle = styled.div`
  display: none;
  cursor: pointer;
  z-index: 101;
  
  @media (max-width: 768px) {
    display: block;
  }
  
  @media (max-width: 480px) {
    transform: scale(0.9);
  }
`;

const MobileMenuIcon = styled.div`
  width: 25px;
  height: 2px;
  background: ${props => props.$isOpen ? 'transparent' : 'var(--text-primary)'};
  transition: all 0.3s ease;
  position: relative;
  
  &::before, &::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 2px;
    background: var(--text-primary);
    transition: all 0.3s ease;
  }
  
  &::before {
    transform: ${props => props.$isOpen ? 'rotate(45deg)' : 'translateY(-7px)'};
  }
  
  &::after {
    transform: ${props => props.$isOpen ? 'rotate(-45deg)' : 'translateY(7px)'};
  }
  
  @media (max-width: 480px) {
    width: 22px;
    
    &::before, &::after {
      width: 22px;
    }
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100vh;
  background: var(--bg-darker);
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: -5px 0 25px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 400px) {
    width: 100%;
  }
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  
  @media (max-width: 480px) {
    gap: 1.2rem;
  }
`;

const MobileNavLink = styled.a`
  font-family: var(--font-primary);
  font-size: 1.5rem;
  font-weight: 600;
  transition: all var(--transition-normal);
  
  &:hover {
    color: var(--primary);
    transform: translateY(-3px);
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const ContactButton = styled.a`
  margin-top: 2.5rem;
  padding: 0.8rem 2rem;
  background: var(--primary);
  color: white;
  border-radius: var(--border-radius-sm);
  font-weight: 600;
  transition: all var(--transition-normal);
  
  &:hover {
    background: var(--primary-dark);
    transform: translateY(-3px);
  }
  
  @media (max-width: 480px) {
    margin-top: 2rem;
    padding: 0.6rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
  backdrop-filter: blur(3px);
`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  
  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Update active link based on scroll position
      const sections = document.querySelectorAll('section');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
          current = section.getAttribute('id');
        }
      });
      
      if (current) {
        setActiveLink(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
    // Prevent background scrolling when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };
  
  // Close mobile menu when clicking a link
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <NavbarContainer className={isScrolled ? 'scrolled' : ''}>
      <div className="container">
        <NavbarContent>
          <Logo>
            <a href="#home">
              <span>D</span>harmendra<span>.</span>
            </a>
          </Logo>
          
          <NavLinks>
            <NavLink href="#home" className={activeLink === 'home' ? 'active' : ''}>
              Home
            </NavLink>
            <NavLink href="#about" className={activeLink === 'about' ? 'active' : ''}>
              About
            </NavLink>
            <NavLink href="#skills" className={activeLink === 'skills' ? 'active' : ''}>
              Skills
            </NavLink>
            <NavLink href="#projects" className={activeLink === 'projects' ? 'active' : ''}>
              Projects
            </NavLink>
            <NavLink href="#education" className={activeLink === 'education' ? 'active' : ''}>
              Education
            </NavLink>
            <NavLink href="#contact" className={activeLink === 'contact' ? 'active' : ''}>
              Contact
            </NavLink>
          </NavLinks>
          
          <MobileMenuToggle onClick={toggleMenu}>
            <MobileMenuIcon $isOpen={isMenuOpen} />
          </MobileMenuToggle>
          
          <AnimatePresence>
            {isMenuOpen && (
              <>
                <Overlay
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={closeMenu}
                />
                
                <MobileMenu
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 300, opacity: 0 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                >
                  <MobileNavLinks>
                    <MobileNavLink href="#home" onClick={closeMenu}>
                      Home
                    </MobileNavLink>
                    <MobileNavLink href="#about" onClick={closeMenu}>
                      About
                    </MobileNavLink>
                    <MobileNavLink href="#skills" onClick={closeMenu}>
                      Skills
                    </MobileNavLink>
                    <MobileNavLink href="#projects" onClick={closeMenu}>
                      Projects
                    </MobileNavLink>
                    <MobileNavLink href="#education" onClick={closeMenu}>
                      Education
                    </MobileNavLink>
                    <MobileNavLink href="#contact" onClick={closeMenu}>
                      Contact
                    </MobileNavLink>
                    
                    <ContactButton href="#contact" onClick={closeMenu}>
                      Get In Touch
                    </ContactButton>
                  </MobileNavLinks>
                </MobileMenu>
              </>
            )}
          </AnimatePresence>
        </NavbarContent>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;