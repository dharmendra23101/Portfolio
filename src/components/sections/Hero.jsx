import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import TextAnimation from '../animations/TextAnimation';
import SocialLinks from '../layout/SocialLinks';
import { personalInfo } from '../../data/personalInfo';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  padding-top: var(--header-height);
  
  @media (max-width: 768px) {
    padding-top: calc(var(--header-height) - 10px);
    padding-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    min-height: auto;
    padding-top: calc(var(--header-height) - 20px);
  }
`;

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0 0.5rem;
  }
`;

const HeroContent = styled.div`
  @media (max-width: 992px) {
    order: 2;
    margin-top: 1rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0;
  }
`;

const SubHeading = styled(motion.div)`
  font-size: 1.2rem;
  color: var(--primary);
  margin-bottom: 1rem;
  font-family: var(--font-primary);
  display: flex;
  align-items: center;
  
  &::before {
    content: '';
    display: inline-block;
    width: 50px;
    height: 1px;
    background: var(--primary);
    margin-right: 1rem;
    
    @media (max-width: 992px) {
      display: none;
    }
  }
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;

const MainHeading = styled.h1`
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  .highlight {
    color: var(--primary);
  }
  
  @media (max-width: 768px) {
    font-size: 2.25rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 0.75rem;
  }
`;

const TypedText = styled.div`
  font-size: 2rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  font-family: var(--font-primary);
  height: 2.5rem;
  
  span {
    display: inline-block;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      right: -8px;
      top: 5%;
      height: 90%;
      width: 2px;
      background: var(--primary);
      animation: blink 1s infinite;
    }
  }
  
  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    height: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    height: 1.6rem;
  }
`;

const HeroBio = styled(motion.p)`
  margin-bottom: 2.5rem;
  max-width: 500px;
  
  @media (max-width: 992px) {
    max-width: 100%;
    margin: 0 auto 2rem;
  }
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
    padding: 0 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 1.25rem;
    line-height: 1.5;
    padding: 0 0.5rem;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  
  @media (max-width: 992px) {
    justify-content: center;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;
    padding: 0 1rem;
    margin-bottom: 1.5rem;
    
    a {
      width: 100%;
      padding: 0.8rem 1rem;
      font-size: 0.9rem;
      display: flex;
      justify-content: center;
    }
  }
`;

const HeroVisual = styled.div`
  position: relative;
  
  @media (max-width: 992px) {
    order: 1;
    margin: 1rem auto 0;
    max-width: 90%;
    width: 100%;
  }
  
  @media (max-width: 480px) {
    margin-top: 0.5rem;
    max-width: 100%;
    padding: 0 0.5rem;
  }
`;

const CodeContainer = styled(motion.div)`
  background: rgba(17, 18, 26, 0.7);
  border-radius: var(--border-radius-md);
  padding: 2rem;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--border-color);
  font-family: 'Fira Code', monospace;
  line-height: 1.8;
  width: 100%;
  max-width: 550px;
  position: relative;
  overflow-x: auto;
  
  @media (max-width: 992px) {
    margin: 0 auto;
    max-width: 500px;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    max-width: 450px;
    font-size: 0.9rem;
    line-height: 1.6;
  }
  
  @media (max-width: 480px) {
    padding: 1.25rem 1rem;
    font-size: 0.7rem;
    line-height: 1.4;
    max-width: 100%;
    width: 100%;
    
    &::-webkit-scrollbar {
      height: 4px;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: var(--primary);
      border-radius: 4px;
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 30px;
    background: rgba(40, 42, 54, 0.8);
    border-radius: var(--border-radius-md) var(--border-radius-md) 0 0;
    
    @media (max-width: 480px) {
      height: 25px;
    }
  }
  
  &::after {
    content: '• • •';
    position: absolute;
    top: 0;
    left: 15px;
    width: 50px;
    height: 30px;
    display: flex;
    align-items: center;
    font-size: 16px;
    color: var(--text-secondary);
    
    @media (max-width: 480px) {
      font-size: 14px;
      height: 25px;
    }
  }
`;

const PreTag = styled.pre`
  margin: 0;
  padding-top: 1rem;
  overflow-x: auto;
  
  @media (max-width: 480px) {
    padding-top: 0.75rem;
    font-size: 0.7rem;
  }
  
  code {
    color: #f8f8f2;
    display: inline-block;
    min-width: 100%;
    
    @media (max-width: 480px) {
      font-size: inherit;
    }
  }
  
  .keyword {
    color: #ff79c6;
  }
  
  .string {
    color: #f1fa8c;
  }
  
  .number {
    color: #bd93f9;
  }
  
  .comment {
    color: #6272a4;
  }
  
  .function {
    color: #50fa7b;
  }
  
  .operator {
    color: #ff79c6;
  }
  
  .variable {
    color: #8be9fd;
  }
  
  .property {
    color: #f1fa8c;
  }
`;

const SocialContainer = styled(motion.div)`
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    transform: scale(0.9);
  }
`;

// Create a more compact code version for mobile
const MobileCode = () => (
  <code>
    <span className="comment">// Welcome to my portfolio</span><br />
    <span className="keyword">const</span> <span className="variable">dev</span> <span className="operator">=</span> {'{'}<br />
    &nbsp;<span className="property">name</span>: <span className="string">"Dharmendra"</span>,<br />
    &nbsp;<span className="property">title</span>: <span className="string">"Full Stack Dev"</span>,<br />
    &nbsp;<span className="property">skills</span>: [<br />
    &nbsp;&nbsp;<span className="string">"JS"</span>, <span className="string">"React"</span>, <span className="string">"Node"</span>,<br />
    &nbsp;&nbsp;<span className="string">"DSA"</span>, <span className="string">"CP"</span><br />
    &nbsp;],<br />
    &nbsp;<span className="property">education</span>: <span className="string">"B.Tech"</span>,<br />
    &nbsp;<span className="property">location</span>: <span className="string">"Raipur"</span><br />
    {'}'}<br />
    <span className="keyword">function</span> <span className="function">connect</span>() {'{'}<br />
    &nbsp;<span className="keyword">return</span> <span className="string">"Let's connect!"</span><br />
    {'}'}<br />
    <span className="function">connect</span>();
  </code>
);

// Full code for desktop/tablet
const DesktopCode = () => (
  <code>
    <span className="comment">// Welcome to my portfolio</span><br />
    <span className="keyword">const</span> <span className="variable">developer</span> <span className="operator">=</span> {'{'}<br />
    &nbsp;&nbsp;<span className="property">name</span>: <span className="string">"Dharmendra Dhruw"</span>,<br />
    &nbsp;&nbsp;<span className="property">title</span>: <span className="string">"Full Stack Developer"</span>,<br />
    &nbsp;&nbsp;<span className="property">skills</span>: [<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"JavaScript"</span>, <span className="string">"React"</span>, <span className="string">"Node.js"</span>,<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"DSA"</span>, <span className="string">"Competitive Programming"</span><br />
    &nbsp;&nbsp;],<br />
    &nbsp;&nbsp;<span className="property">education</span>: <span className="string">"B.Tech in ECE"</span>,<br />
    &nbsp;&nbsp;<span className="property">location</span>: <span className="string">"Naya Raipur, India"</span>,<br />
    &nbsp;&nbsp;<span className="property">passion</span>: <span className="string">"Building elegant solutions"</span><br />
    {'}'}<br /><br />
    <span className="keyword">function</span> <span className="function">connect</span>() {'{'}<br />
    &nbsp;&nbsp;<span className="keyword">return</span> <span className="string">"Let's create something amazing!"</span><br />
    {'}'}<br /><br />
    <span className="function">connect</span>();
  </code>
);

const Hero = () => {
  const typedTextRef = useRef(null);
  const typedTextValueRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const typedTexts = ['Full Stack Developer', 'Web Developer', 'Problem Solver', 'Competitive Programmer'];
  
  useEffect(() => {
    // Check if mobile device based on screen width
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  useEffect(() => {
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const type = () => {
      const currentText = typedTexts[currentTextIndex];
      
      if (isDeleting) {
        // Delete text
        currentCharIndex--;
        typingSpeed = 50;
      } else {
        // Type text
        currentCharIndex++;
        typingSpeed = 100;
      }
      
      if (typedTextValueRef.current) {
        typedTextValueRef.current.textContent = currentText.substring(0, currentCharIndex);
      }
      
      // Check if we've completed typing the word
      if (!isDeleting && currentCharIndex === currentText.length) {
        // Start deleting after a pause
        isDeleting = true;
        typingSpeed = 1000; // Wait before deleting
      } else if (isDeleting && currentCharIndex === 0) {
        // Move to next word
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % typedTexts.length;
      }
      
      setTimeout(type, typingSpeed);
    };
    
    // Start the typing animation
    const timeout = setTimeout(type, 1000);
    
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <HeroSection id="home">
      <div className="container">
        <HeroContainer>
          <HeroContent>
            <SubHeading
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hello, I'm
            </SubHeading>
            
            <MainHeading>
              <TextAnimation>
                Dharmendra <span className="highlight">Dhruw</span>
              </TextAnimation>
            </MainHeading>
            
            <TypedText ref={typedTextRef}>
              I'm a <span ref={typedTextValueRef}></span>
            </TypedText>
            
            <HeroBio
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {personalInfo.bio}
            </HeroBio>
            
            <HeroButtons>
              <motion.a 
                href="#projects"
                className="btn"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              
              <motion.a 
                href="/assets/resume.pdf"
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.a>
            </HeroButtons>
            
            <SocialContainer
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <SocialLinks />
            </SocialContainer>
          </HeroContent>
          
          <HeroVisual>
            <CodeContainer
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <PreTag>
                {isMobile ? <MobileCode /> : <DesktopCode />}
              </PreTag>
            </CodeContainer>
          </HeroVisual>
        </HeroContainer>
      </div>
    </HeroSection>
  );
};

export default Hero;