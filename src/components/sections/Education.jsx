import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaGraduationCap } from 'react-icons/fa';
import { education } from '../../data/education';

const EducationSection = styled.section`
  background: var(--bg-darker);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 70% 30%, rgba(110, 87, 255, 0.1) 0%, transparent 25%),
                radial-gradient(circle at 30% 70%, rgba(0, 217, 255, 0.07) 0%, transparent 20%);
    z-index: 0;
  }
`;

const EducationContainer = styled.div`
  position: relative;
  z-index: 1;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    width: 2px;
    background: var(--primary);
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  width: 50%;
  padding: 0 40px 50px;
  box-sizing: border-box;
  
  &:nth-child(odd) {
    left: 0;
    
    ${props => props.last && `
      padding-bottom: 0;
    `}
  }
  
  &:nth-child(even) {
    left: 50%;
    
    ${props => props.last && `
      padding-bottom: 0;
    `}
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 0 50px 50px;
    
    &:nth-child(odd), &:nth-child(even) {
      left: 0;
    }
    
    ${props => props.last && `
      padding-bottom: 0;
    `}
  }
`;

const TimelineIcon = styled.div`
  position: absolute;
  top: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--primary);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 1;
  
  &:nth-child(odd) {
    right: -20px;
  }
  
  &:nth-child(even) {
    left: -20px;
  }
  
  @media (max-width: 768px) {
    left: 0;
  }
`;

const TimelineContent = styled.div`
  background: var(--bg-card);
  border-radius: var(--border-radius-md);
  padding: 1.5rem;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-color);
  transition: all var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
    border-color: var(--primary);
  }
`;

const TimelinePeriod = styled.div`
  display: inline-block;
  background: var(--primary);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: var(--border-radius-sm);
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const TimelineTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
`;

const TimelineDegree = styled.p`
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
`;

const TimelineField = styled.p`
  color: var(--text-secondary);
  font-style: italic;
`;

const Education = () => {
  return (
    <EducationSection id="education">
      <div className="container">
        <EducationContainer>
          <div className="section-title">
            <h2>Education</h2>
            <p>My academic background</p>
          </div>
          
          <Timeline>
            {education.map((edu, index) => (
              <TimelineItem
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                last={index === education.length - 1}
              >
                <TimelineIcon>
                  <FaGraduationCap />
                </TimelineIcon>
                
                <TimelineContent>
                  <TimelinePeriod>{edu.period}</TimelinePeriod>
                  <TimelineTitle>{edu.institution}</TimelineTitle>
                  <TimelineDegree>{edu.degree}</TimelineDegree>
                  <TimelineField>{edu.field}</TimelineField>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </EducationContainer>
      </div>
    </EducationSection>
  );
};

export default Education;