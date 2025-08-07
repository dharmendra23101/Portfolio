import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ParticleBackground = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 50;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x070810, 1);
    
    containerRef.current.appendChild(renderer.domElement);
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 1500;
    
    const posArray = new Float32Array(particleCount * 3);
    const velocityArray = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i += 3) {
      // Position
      posArray[i] = (Math.random() - 0.5) * 150;
      posArray[i + 1] = (Math.random() - 0.5) * 150;
      posArray[i + 2] = (Math.random() - 0.5) * 150;
      
      // Velocity
      velocityArray[i] = (Math.random() - 0.5) * 0.05;
      velocityArray[i + 1] = (Math.random() - 0.5) * 0.05;
      velocityArray[i + 2] = (Math.random() - 0.5) * 0.05;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('velocity', new THREE.BufferAttribute(velocityArray, 3));
    
    // Material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.2,
      color: 0x6e57ff,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    
    // Points
    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleSystem);
    
    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    
    const onDocumentMouseMove = (event) => {
      mouseX = (event.clientX - width / 2) * 0.001;
      mouseY = (event.clientY - height / 2) * 0.001;
    };
    
    document.addEventListener('mousemove', onDocumentMouseMove);
    
    // Handle window resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      
      renderer.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      // Rotate the particle system
      particleSystem.rotation.x += 0.0001;
      particleSystem.rotation.y += 0.0002;
      
      // Move particles
      const positions = particlesGeometry.attributes.position.array;
      const velocities = particlesGeometry.attributes.velocity.array;
      
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += velocities[i];
        positions[i + 1] += velocities[i + 1];
        positions[i + 2] += velocities[i + 2];
        
        // Boundaries check and reset
        if (positions[i] < -75 || positions[i] > 75) velocities[i] *= -1;
        if (positions[i + 1] < -75 || positions[i + 1] > 75) velocities[i + 1] *= -1;
        if (positions[i + 2] < -75 || positions[i + 2] > 75) velocities[i + 2] *= -1;
      }
      
      particlesGeometry.attributes.position.needsUpdate = true;
      
      // Mouse interaction
      particleSystem.rotation.x += mouseY * 0.05;
      particleSystem.rotation.y += mouseX * 0.05;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    return () => {
      // Proper cleanup
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', onDocumentMouseMove);
      
      // Cancel animation frame
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      
      // Clean up Three.js resources
      scene.remove(particleSystem);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
      
      // Safely remove DOM element
      if (containerRef.current && renderer.domElement && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);
  
  return <div ref={containerRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />;
};

export default ParticleBackground;