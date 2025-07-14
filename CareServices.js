import React from 'react';
import './CareServices.css';

function DentalCareServices() {
  return (
    <div className="dental-care-container">
      {/* Top section with family and text */}
      <div className="top-section">
        <div className="family-image-section">
         
        </div>
        
        <div className="content-section">
          <h1>Transform Your Mind, One Step at a Time</h1>
          <p>Empowering Lives Through Personalized Mental Health Solutions</p>
          <a to="/about" className="know-more-btn" style={{ textDecoration: 'none' }}>
  Know more
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
</a>

        </div>
      </div>
      
      {/* Bottom section with two service cards */}
      <div className="bottom-section">
        <div className="service-card seniors-card">
          
        </div>
        
        <div className="service-card xray-card">
          
        </div>
      </div>
    </div>
  );
}

export default DentalCareServices;