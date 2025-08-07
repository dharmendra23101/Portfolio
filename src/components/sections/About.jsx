import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaDownload } from 'react-icons/fa';
import ConnectedParticles from '../animations/ConnectedParticles';
import { personalInfo } from '../../data/personalInfo';

const AboutSection = styled.section`
  position: relative;
  overflow: hidden;
`;

const AboutContainer = styled.div`
  position: relative;
  z-index: 2;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const AboutText = styled.div`
  @media (max-width: 992px) {
    order: 2;
  }
`;

const AboutHeading = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  
  .highlight {
    color: var(--primary);
  }
`;

const AboutParagraph = styled(motion.p)`
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
  line-height: 1.8;
`;

const AboutDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin: 2.5rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const DetailItem = styled(motion.div)`
  background: var(--bg-card);
  border-radius: var(--border-radius-sm);
  padding: 1.2rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  border: 1px solid var(--border-color);
  transition: all var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
    border-color: var(--primary);
  }
`;

const DetailIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(110, 87, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: var(--primary);
  flex-shrink: 0;
`;

const DetailContent = styled.div`
  flex: 1;
`;

const DetailLabel = styled.div`
  font-weight: 600;
  margin-bottom: 0.3rem;
  color: var(--text-primary);
`;

const DetailValue = styled.div`
  color: var(--text-secondary);
  font-size: 0.95rem;
`;

const ResumeButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.8rem;
  background: var(--primary);
  color: white;
  border-radius: var(--border-radius-sm);
  font-weight: 600;
  transition: all var(--transition-normal);
  border: none;
  cursor: pointer;
  margin-top: 1rem;
  
  svg {
    font-size: 1.1rem;
  }
  
  &:hover {
    background: var(--primary-dark);
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(110, 87, 255, 0.3);
  }
`;

const AboutStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled(motion.div)`
  background: var(--bg-card);
  border-radius: var(--border-radius-md);
  padding: 2rem;
  text-align: center;
  border: 1px solid var(--border-color);
  transition: all var(--transition-normal);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-md);
    border-color: var(--primary);
  }
`;

const StatCount = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 0.8rem;
  font-family: var(--font-primary);
  
  &::after {
    content: '';
    display: block;
    width: 30px;
    height: 2px;
    background: var(--primary);
    margin: 0.5rem auto;
  }
`;

const StatTitle = styled.div`
  color: var(--text-secondary);
  font-size: 1rem;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <ConnectedParticles containerId="about" />
      
      <div className="container">
        <AboutContainer>
          <div className="section-title">
            <h2>About Me</h2>
            <p>Get to know me better</p>
          </div>
          
          <AboutContent>
            <AboutText>
              <AboutHeading>
                Hello, I'm <span className="highlight">Dharmendra</span>
              </AboutHeading>
              
              <AboutParagraph
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                I'm an Electronics and Communication Engineering student at IIIT Naya Raipur with a strong passion for Full Stack Web Development and problem-solving through Data Structures and Algorithms.
              </AboutParagraph>
              
              <AboutParagraph
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                I specialize in building responsive and dynamic web applications that deliver real-world impact. My journey in tech started with a fascination for how systems work, which has grown into a deep interest in software engineering and full stack development.
              </AboutParagraph>
              
              <AboutParagraph
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Beyond development, I actively engage in competitive programming to enhance my algorithmic thinking and coding skills. I'm always eager to explore new technologies and push my limits as a developer and problem solver.
              </AboutParagraph>
              
              <AboutDetails>
                <DetailItem
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <DetailIcon>
                    <FaEnvelope />
                  </DetailIcon>
                  <DetailContent>
                    <DetailLabel>Email</DetailLabel>
                    <DetailValue>{personalInfo.email}</DetailValue>
                  </DetailContent>
                </DetailItem>
                
                <DetailItem
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <DetailIcon>
                    <FaPhone />
                  </DetailIcon>
                  <DetailContent>
                    <DetailLabel>Phone</DetailLabel>
                    <DetailValue>{personalInfo.phone}</DetailValue>
                  </DetailContent>
                </DetailItem>
                
                <DetailItem
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <DetailIcon>
                    <FaMapMarkerAlt />
                  </DetailIcon>
                  <DetailContent>
                    <DetailLabel>Location</DetailLabel>
                    <DetailValue>{personalInfo.location}</DetailValue>
                  </DetailContent>
                </DetailItem>
                
                <DetailItem
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <DetailIcon>
                    <FaGraduationCap />
                  </DetailIcon>
                  <DetailContent>
                    <DetailLabel>Education</DetailLabel>
                    <DetailValue>B.Tech in Electronics and Communication Engineering</DetailValue>
                  </DetailContent>
                </DetailItem>
              </AboutDetails>
              
              <ResumeButton
                href="/assets/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload /> Download Resume
              </ResumeButton>
            </AboutText>
            
            <AboutStats>
              <StatItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <StatCount>5+</StatCount>
                <StatTitle>Projects Completed</StatTitle>
              </StatItem>
              
              <StatItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <StatCount>350+</StatCount>
                <StatTitle>DSA Problems Solved</StatTitle>
              </StatItem>
              
              <StatItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <StatCount>10+</StatCount>
                <StatTitle>Technical Skills</StatTitle>
              </StatItem>
              
              <StatItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <StatCount>2+</StatCount>
                <StatTitle>Years of Coding</StatTitle>
              </StatItem>
            </AboutStats>
          </AboutContent>
        </AboutContainer>
      </div>
    </AboutSection>
  );
};

export default About;