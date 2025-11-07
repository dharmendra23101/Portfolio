import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';
import { personalInfo } from '../../data/personalInfo';

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
    scale: 1.15,
    transition: { duration: 0.3 },
  },
};

const SocialLinks = () => {
  const { github, linkedin, instagram, twitter } = personalInfo;

  const links = [
    { id: 'github', icon: <FaGithub />, url: github },
    { id: 'linkedin', icon: <FaLinkedinIn />, url: linkedin },
    { id: 'instagram', icon: <FaInstagram />, url: instagram },
    { id: 'twitter', icon: <FaTwitter />, url: twitter },
  ];

  return (
    <SocialLinksContainer>
      {links.map(
        (link) =>
          link.url && (
            <SocialIcon
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={link.id}
              whileHover="hover"
              variants={iconVariants}
            >
              {link.icon}
            </SocialIcon>
          )
      )}
    </SocialLinksContainer>
  );
};

export default SocialLinks;
