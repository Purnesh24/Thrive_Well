import React, { useState, useEffect } from 'react';
import './Journal.css';

const Journal = () => {
  const [entry, setEntry] = useState('');
  const [entries, setEntries] = useState(() => {
    // Load entries from local storage if available
    const savedEntries = localStorage.getItem('journalEntries');
    return savedEntries ? JSON.parse(savedEntries) : [];
  });

  useEffect(() => {
    // Save entries to local storage whenever they change
    localStorage.setItem('journalEntries', JSON.stringify(entries));
  }, [entries]);

  const handleInputChange = (e) => {
    setEntry(e.target.value);
  };

  const handleAddEntry = () => {
    if (entry.trim()) {
      const newEntry = {
        text: entry,
        time: new Date().toLocaleString()
      };
      setEntries([newEntry, ...entries]);
      setEntry(''); // Clear the input field
    }
  };

  return (
    <div className="journal-app">
      <h1 className="journal-title">My Journal</h1>
      <div className="journal-input-container">
        <textarea
          className="journal-input"
          value={entry}
          onChange={handleInputChange}
          placeholder="Write your thoughts here..."
          rows="4"
        />
        <button className="journal-button" onClick={handleAddEntry}>Add Entry</button>
      </div>
      <div className="journal-entries-container">
        {entries.map((entry, index) => (
          <div key={index} className="journal-entry-card">
            <p className="journal-entry-text">{entry.text}</p>
            <small className="journal-entry-time">{entry.time}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journal;
