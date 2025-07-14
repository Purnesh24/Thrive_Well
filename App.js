import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router, Routes, and Route
import './App.css'; // Import App styles
import HomePage from './HomePage'; // Import the HomePage component
import DentalJourney from './Journey'; // Import the DentalJourney component
import DentalCareServices from './CareServices'; // Import DentalCareServices component
import Footer from './Footer'; // Import Footer component
import SleepAnalysis from './SleepAnalysis'; // Import SleepAnalysis component
import EmotionExplorer from './EmotionExplorer'; // Import EmotionExplorer component
import Journal from './Journal'; // Import Journal component

function App() {
  return (
    <Router> {/* Wrap the entire App in Router */}
      <div className="App">
        <HomePage />
        <EmotionExplorer /> 
        <DentalCareServices /> 
        <SleepAnalysis /> 
        <DentalJourney /> 
        <Journal /> 
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
