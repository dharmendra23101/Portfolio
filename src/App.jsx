import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ErrorBoundary from './components/utils/ErrorBoundary';
import ScrollProgress from './components/animations/ScrollProgress';
import CustomCursor from './components/animations/CustomCursor';
import WaveBackground from './components/animations/WaveBackground';
import './styles/global.css';

// Lazy load components to improve initial loading performance
const ParticleBackground = lazy(() => import('./components/animations/ParticleBackground'));
const Hero = lazy(() => import('./components/sections/Hero'));
const About = lazy(() => import('./components/sections/About'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Education = lazy(() => import('./components/sections/Education'));
const Contact = lazy(() => import('./components/sections/Contact'));
const HeroCharacter = lazy(() => import('./components/animations/HeroCharacter'));

// Loading component for suspense fallback
const LoadingComponent = () => (
  <div className="section-loading">
    <div className="loader">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets and initialize resources
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <p>Loading amazing stuff...</p>
      </div>
    );
  }

  return (
    <div className="app">
      {/* Custom Cursor (desktop only) */}
      <CustomCursor />
      
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Background Elements */}
      <ErrorBoundary>
        <Suspense fallback={<div></div>}>
          <WaveBackground />
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Suspense fallback={<div></div>}>
          <ParticleBackground />
        </Suspense>
      </ErrorBoundary>
      
      <Navbar />
      
      <main>
        <ErrorBoundary key="hero">
          <Suspense fallback={<LoadingComponent />}>
            <Hero />
            <HeroCharacter />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary key="about">
          <Suspense fallback={<LoadingComponent />}>
            <About />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary key="skills">
          <Suspense fallback={<LoadingComponent />}>
            <Skills />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary key="projects">
          <Suspense fallback={<LoadingComponent />}>
            <Projects />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary key="education">
          <Suspense fallback={<LoadingComponent />}>
            <Education />
          </Suspense>
        </ErrorBoundary>
        
        <ErrorBoundary key="contact">
          <Suspense fallback={<LoadingComponent />}>
            <Contact />
          </Suspense>
        </ErrorBoundary>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;