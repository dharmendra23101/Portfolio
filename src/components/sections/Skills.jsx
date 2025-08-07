import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaCode, FaServer, FaDatabase, FaMobile, FaTools, FaCloud } from 'react-icons/fa';
import TextAnimation from '../animations/TextAnimation';
import FloatingIcon from '../animations/FloatingIcon';

// Define the SkillsSection styled component properly
const SkillsSection = styled.section`
  padding: 100px 0;
  background-color: var(--bg-dark);
  position: relative;
  
  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const SkillsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled(motion.div)`
  background: var(--bg-darker);
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-color);
  transition: all var(--transition-normal);
  
  &:hover {
    border-color: var(--primary);
    transform: translateY(-5px);
  }
`;

const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  color: var(--primary);
  font-size: 1.5rem;
  font-weight: 700;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.8rem;
  
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const SkillItem = styled(motion.li)`
  font-size: 0.95rem;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  
  &:before {
    content: "▹";
    color: var(--primary);
    margin-right: 0.5rem;
  }
`;

const Skills = () => {
  const frontendSkills = [
    'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 
    'Vue.js', 'Redux', 'Styled Components', 'Tailwind CSS'
  ];
  
  const backendSkills = [
    'Node.js', 'Express', 'Python', 'Django', 'Flask', 'REST APIs', 
    'GraphQL', 'Microservices'
  ];
  
  const databaseSkills = [
    'MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis', 'Elasticsearch'
  ];
  
  const mobileSkills = [
    'React Native', 'Flutter', 'iOS', 'Android', 'Expo', 'Mobile UI/UX'
  ];
  
  const devopsSkills = [
    'Git', 'Docker', 'Kubernetes', 'CI/CD', 'Jenkins', 'GitHub Actions'
  ];
  
  const cloudSkills = [
    'AWS', 'Google Cloud', 'Azure', 'Vercel', 'Netlify', 'Heroku'
  ];

  return (
    <SkillsSection id="skills">
      <div className="container">
        <SkillsContainer>
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2>My Skills</h2>
            <p>Technologies I work with</p>
          </motion.div>
          
          <SkillsGrid>
            <SkillCategory
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.03 }}
            >
              <SkillHeader>
                <FloatingIcon delay={0.5} duration={4} yOffset={10}>
                  <FaCode size={30} />
                </FloatingIcon>
                <TextAnimation>Frontend</TextAnimation>
              </SkillHeader>
              <SkillList>
                {frontendSkills.map((skill, index) => (
                  <SkillItem
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </SkillItem>
                ))}
              </SkillList>
            </SkillCategory>
            
            <SkillCategory
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.03 }}
            >
              <SkillHeader>
                <FloatingIcon delay={0.7} duration={3.5} yOffset={10}>
                  <FaServer size={30} />
                </FloatingIcon>
                <TextAnimation>Backend</TextAnimation>
              </SkillHeader>
              <SkillList>
                {backendSkills.map((skill, index) => (
                  <SkillItem
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </SkillItem>
                ))}
              </SkillList>
            </SkillCategory>
            
            <SkillCategory
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.03 }}
            >
              <SkillHeader>
                <FloatingIcon delay={0.3} duration={4.2} yOffset={10}>
                  <FaDatabase size={30} />
                </FloatingIcon>
                <TextAnimation>Databases</TextAnimation>
              </SkillHeader>
              <SkillList>
                {databaseSkills.map((skill, index) => (
                  <SkillItem
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </SkillItem>
                ))}
              </SkillList>
            </SkillCategory>
            
            <SkillCategory
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.03 }}
            >
              <SkillHeader>
                <FloatingIcon delay={0.8} duration={3.8} yOffset={10}>
                  <FaMobile size={30} />
                </FloatingIcon>
                <TextAnimation>Mobile</TextAnimation>
              </SkillHeader>
              <SkillList>
                {mobileSkills.map((skill, index) => (
                  <SkillItem
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </SkillItem>
                ))}
              </SkillList>
            </SkillCategory>
            
            <SkillCategory
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.03 }}
            >
              <SkillHeader>
                <FloatingIcon delay={0.2} duration={4.5} yOffset={10}>
                  <FaTools size={30} />
                </FloatingIcon>
                <TextAnimation>DevOps</TextAnimation>
              </SkillHeader>
              <SkillList>
                {devopsSkills.map((skill, index) => (
                  <SkillItem
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </SkillItem>
                ))}
              </SkillList>
            </SkillCategory>
            
            <SkillCategory
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.03 }}
            >
              <SkillHeader>
                <FloatingIcon delay={0.6} duration={4.1} yOffset={10}>
                  <FaCloud size={30} />
                </FloatingIcon>
                <TextAnimation>Cloud</TextAnimation>
              </SkillHeader>
              <SkillList>
                {cloudSkills.map((skill, index) => (
                  <SkillItem
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </SkillItem>
                ))}
              </SkillList>
            </SkillCategory>
          </SkillsGrid>
        </SkillsContainer>
      </div>
    </SkillsSection>
  );
};

export default Skills;