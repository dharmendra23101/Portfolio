import React, { useState, useEffect } from 'react';
import { personalInfo } from '../utils/data';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#" className="logo">
          <span>D</span>harmend <span>D</span>hruw
        </a>
        
        <div className="mobile-menu-btn" onClick={toggleMenu}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
        
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
            <li><a href="#education" onClick={() => setIsMenuOpen(false)}>Education</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>
      
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1rem 0;
          background-color: transparent;
          transition: all 0.3s ease;
        }
        
        .navbar.scrolled {
          background-color: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          padding: 0.5rem 0;
        }
        
        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--dark);
        }
        
        .logo span {
          color: var(--primary);
        }
        
        .nav-menu ul {
          display: flex;
          list-style: none;
          gap: 2rem;
        }
        
        .nav-menu a {
          color: var(--dark);
          font-weight: 500;
          transition: color 0.3s ease;
        }
        
        .nav-menu a:hover {
          color: var(--primary);
        }
        
        .mobile-menu-btn {
          display: none;
          font-size: 1.5rem;
          cursor: pointer;
        }
        
        @media screen and (max-width: 768px) {
          .mobile-menu-btn {
            display: block;
          }
          
          .nav-menu {
            position: fixed;
            top: 0;
            right: -100%;
            width: 70%;
            height: 100vh;
            background-color: white;
            padding: 5rem 2rem;
            transition: all 0.3s ease;
            box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
          }
          
          .nav-menu.active {
            right: 0;
          }
          
          .nav-menu ul {
            flex-direction: column;
            gap: 1.5rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
