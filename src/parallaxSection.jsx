import React from 'react';
import './parallaxSection.css';

const ParallaxSections = ({ children }) => {
  return (
    <div className="parallax-container">
      <section className="parallax gengar-bg" />
      <section className="parallax purple-bg">
        <div className="content">{children}</div>
      </section>
    </div>
  );
};

export default ParallaxSections;
