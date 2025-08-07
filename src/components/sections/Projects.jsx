import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt, FaFilter } from 'react-icons/fa';
import { projects } from '../../data/projects';

const ProjectsSection = styled.section`
  position: relative;
  overflow: hidden;
`;

const ProjectsContainer = styled.div`
  position: relative;
  z-index: 1;
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  
  @media (max-width: 576px) {
    gap: 0.5rem;
  }
`;

const FilterButton = styled(motion.button)`
  background: ${props => props.active ? 'var(--primary)' : 'var(--bg-card)'};
  color: ${props => props.active ? 'white' : 'var(--text-secondary)'};
  border: 1px solid ${props => props.active ? 'var(--primary)' : 'var(--border-color)'};
  border-radius: var(--border-radius-sm);
  padding: 0.6rem 1.2rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all var(--transition-normal);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: ${props => props.active ? 'var(--primary-dark)' : 'var(--bg-card-hover)'};
    transform: translateY(-3px);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

const ProjectCard = styled(motion.div)`
  background: var(--bg-card);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-color);
  transition: all var(--transition-normal);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
    border-color: var(--primary);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${ProjectCard}:hover & img {
    transform: scale(1.1);
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 11, 16, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all var(--transition-normal);
  
  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const ProjectLink = styled.a`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: var(--primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all var(--transition-normal);
  transform: translateY(20px);
  opacity: 0;
  
  &:hover {
    background: var(--primary-dark);
    transform: translateY(-5px) scale(1.1);
  }
  
  ${ProjectCard}:hover & {
    transform: translateY(0);
    opacity: 1;
  }
  
  &:nth-child(2) {
    transition-delay: 0.1s;
  }
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  background: rgba(110, 87, 255, 0.1);
  color: var(--primary);
  border-radius: var(--border-radius-sm);
  padding: 0.3rem 0.6rem;
  font-size: 0.8rem;
  transition: all var(--transition-normal);
  
  &:hover {
    background: var(--primary);
    color: white;
  }
`;

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <ProjectsSection id="projects">
      <div className="container">
        <ProjectsContainer>
          <div className="section-title">
            <h2>My Projects</h2>
            <p>Recent work I've created</p>
          </div>
          <FilterButtons>
            <FilterButton
              active={filter === 'all'}
              onClick={() => setFilter('all')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFilter /> All
            </FilterButton>
            <FilterButton
              active={filter === 'software'}
              onClick={() => setFilter('software')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Software
            </FilterButton>
            <FilterButton
              active={filter === 'hardware'}
              onClick={() => setFilter('hardware')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hardware
            </FilterButton>
          </FilterButtons>
          <ProjectsGrid>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title + index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectImage>
                  <img src={`${import.meta.env.BASE_URL}${project.image}`} alt={project.title} />
                  <ProjectOverlay>
                    <ProjectLinks>
                      <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                      </ProjectLink>
                      {project.demo && (
                        <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer">
                          <FaExternalLinkAlt />
                        </ProjectLink>
                      )}
                    </ProjectLinks>
                  </ProjectOverlay>
                </ProjectImage>
                <ProjectInfo>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <TechStack>
                    {project.technologies.map((tech, idx) => (
                      <TechTag key={idx}>{tech}</TechTag>
                    ))}
                  </TechStack>
                </ProjectInfo>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </ProjectsContainer>
      </div>
    </ProjectsSection>
  );
};

export default Projects;