// ArrowTextMaterial.jsx
import React from 'react';
import './ArrowTextMaterial.css'; // Ensure you have this CSS file

const ArrowTextMaterial = ({ children }) => {
  return (
    <div className="arrow-text-material">
      {children}
      <span className="click-me">Click Me!</span>
    </div>
  );
};

export default ArrowTextMaterial;
