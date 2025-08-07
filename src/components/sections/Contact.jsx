import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheck, FaTimes } from 'react-icons/fa';
import ConnectedParticles from '../animations/ConnectedParticles';

const ContactSection = styled.section`
  position: relative;
  overflow: hidden;
`;

const ContactContainer = styled.div`
  position: relative;
  z-index: 1;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2.5rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background: var(--bg-card);
  border-radius: var(--border-radius-md);
  padding: 2rem;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-color);
  
  @media (max-width: 992px) {
    order: 2;
  }
`;

const ContactTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background: var(--primary);
  }
`;

const ContactText = styled.p`
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const InfoItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const InfoIcon = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(110, 87, 255, 0.1);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoLabel = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  color: var(--text-primary);
`;

const InfoValue = styled.p`
  color: var(--text-secondary);
  font-size: 0.95rem;
`;

const ResponseTime = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background: rgba(110, 87, 255, 0.05);
  border-left: 3px solid var(--primary);
  border-radius: var(--border-radius-sm);
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ResponseIcon = styled.div`
  font-size: 1.5rem;
  color: var(--primary);
`;

const ResponseText = styled.div`
  flex: 1;
  
  h4 {
    font-size: 1rem;
    margin-bottom: 0.2rem;
    color: var(--text-primary);
  }
  
  p {
    color: var(--text-secondary);
    font-size: 0.9rem;
  }
`;

const ContactForm = styled.div`
  background: var(--bg-card);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-color);
  
  @media (max-width: 992px) {
    order: 1;
  }
`;

const FormHeader = styled.div`
  background: var(--primary);
  padding: 1.5rem 2rem;
  color: white;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.3rem;
  }
  
  p {
    opacity: 0.8;
    margin-bottom: 0;
    color: white;
  }
`;

const FormContent = styled.div`
  padding: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 0;
  }
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-sm);
  color: var(--text-primary);
  transition: all var(--transition-normal);
  
  &:focus {
    border-color: var(--primary);
    outline: none;
    box-shadow: 0 0 0 3px rgba(110, 87, 255, 0.1);
  }
  
  &::placeholder {
    color: var(--text-secondary);
    opacity: 0.6;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-sm);
  color: var(--text-primary);
  transition: all var(--transition-normal);
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    border-color: var(--primary);
    outline: none;
    box-shadow: 0 0 0 3px rgba(110, 87, 255, 0.1);
  }
  
  &::placeholder {
    color: var(--text-secondary);
    opacity: 0.6;
  }
`;

const SubmitButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.8rem 1.8rem;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-normal);
  font-size: 1rem;
  
  &:hover {
    background: var(--primary-dark);
  }
  
  &:disabled {
    background: #666;
    cursor: not-allowed;
  }
`;

const FormMessage = styled(motion.div)`
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: var(--border-radius-sm);
  display: flex;
  align-items: center;
  gap: 0.8rem;
  
  &.success {
    background: rgba(46, 213, 115, 0.1);
    color: #2ed573;
    border: 1px solid rgba(46, 213, 115, 0.3);
  }
  
  &.error {
    background: rgba(255, 71, 87, 0.1);
    color: #ff4757;
    border: 1px solid rgba(255, 71, 87, 0.3);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    message: ''
  });
  
  const formRef = useRef(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    setFormStatus({
      submitting: true,
      submitted: false,
      success: false,
      message: ''
    });
    
    // Simulate form submission with a delay
    setTimeout(() => {
      setFormStatus({
        submitting: false,
        submitted: true,
        success: true,
        message: 'Thank you! Your message has been sent successfully!'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear status after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitting: false,
          submitted: false,
          success: false,
          message: ''
        });
      }, 5000);
    }, 1500);
  };
  
  return (
    <ContactSection id="contact">
      <ConnectedParticles containerId="contact" />
      
      <div className="container">
        <ContactContainer>
          <div className="section-title">
            <h2>Contact Me</h2>
            <p>Let's get in touch</p>
          </div>
          
          <ContactContent>
            <ContactInfo>
              <ContactTitle>Get In Touch</ContactTitle>
              <ContactText>
                Feel free to reach out if you have any questions, opportunities, or just want to say hello! I'm always open to discussing new projects and ideas.
              </ContactText>
              
              <InfoItems>
                <InfoItem>
                  <InfoIcon>
                    <FaEnvelope />
                  </InfoIcon>
                  <InfoContent>
                    <InfoLabel>Email</InfoLabel>
                    <InfoValue>
                      <a href="mailto:dharmendra23101@gmail.com">dharmendra23101@gmail.com</a>
                    </InfoValue>
                  </InfoContent>
                </InfoItem>
                
                <InfoItem>
                  <InfoIcon>
                    <FaPhone />
                  </InfoIcon>
                  <InfoContent>
                    <InfoLabel>Phone</InfoLabel>
                    <InfoValue>
                      <a href="tel:+919893xxxxxx">+91 9893 xxxxxx</a>
                    </InfoValue>
                  </InfoContent>
                </InfoItem>
                
                <InfoItem>
                  <InfoIcon>
                    <FaMapMarkerAlt />
                  </InfoIcon>
                  <InfoContent>
                    <InfoLabel>Location</InfoLabel>
                    <InfoValue>Naya Raipur, Chhattisgarh, India</InfoValue>
                  </InfoContent>
                </InfoItem>
              </InfoItems>
              
              <ResponseTime>
                <ResponseIcon>
                  <FaEnvelope />
                </ResponseIcon>
                <ResponseText>
                  <h4>Response Time</h4>
                  <p>I typically respond within 24 hours</p>
                </ResponseText>
              </ResponseTime>
            </ContactInfo>
            
            <ContactForm>
              <FormHeader>
                <h3>Send Me a Message</h3>
                <p>I'd love to hear from you</p>
              </FormHeader>
              
              <FormContent>
                <form ref={formRef} onSubmit={handleSubmit}>
                  <FormRow>
                    <FormGroup>
                      <FormLabel htmlFor="name">Your Name</FormLabel>
                      <FormInput 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="John Doe" 
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                    
                    <FormGroup>
                      <FormLabel htmlFor="email">Your Email</FormLabel>
                      <FormInput 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="john@example.com" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                  </FormRow>
                  
                  <FormGroup>
                    <FormLabel htmlFor="subject">Subject</FormLabel>
                    <FormInput 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      placeholder="How can I help you?" 
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel htmlFor="message">Message</FormLabel>
                    <FormTextarea 
                      id="message" 
                      name="message" 
                      placeholder="Your message here..." 
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  
                  <SubmitButton 
                    type="submit" 
                    disabled={formStatus.submitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {formStatus.submitting ? 'Sending...' : 'Send Message'} <FaPaperPlane />
                  </SubmitButton>
                  
                  {formStatus.submitted && (
                    <FormMessage
                      className={formStatus.success ? 'success' : 'error'}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      {formStatus.success ? <FaCheck /> : <FaTimes />}
                      {formStatus.message}
                    </FormMessage>
                  )}
                </form>
              </FormContent>
            </ContactForm>
          </ContactContent>
        </ContactContainer>
      </div>
    </ContactSection>
  );
};

export default Contact;