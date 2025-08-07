import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TextAnimation = ({ children, type = 'heading', delay = 0, duration = 0.5 }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Convert children to string safely
  const textContent = React.useMemo(() => {
    if (typeof children === 'string') {
      return children;
    } else if (children && typeof children === 'object' && 'props' in children) {
      // Handle React elements with text content
      return children.props.children || '';
    }
    return '';
  }, [children]);
  
  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  const headingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  };
  
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };
  
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.6, 0.01, -0.05, 0.95],
      },
    },
  };
  
  if (type === 'paragraph') {
    return (
      <motion.p
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={paragraphVariants}
      >
        {children}
      </motion.p>
    );
  }
  
  // Only try to animate letters if we have a string to work with
  if (textContent && typeof textContent === 'string') {
    return (
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={headingVariants}
        style={{ display: 'inline-block' }}
      >
        {textContent.split('').map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            variants={letterVariants}
            style={{ display: 'inline-block', whiteSpace: 'pre' }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    );
  }
  
  // Fallback if children is not a string
  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={headingVariants}
      style={{ display: 'inline-block' }}
    >
      {children}
    </motion.span>
  );
};

export default TextAnimation;