import './App.css';
import { useState } from 'react';
import ButtonGroup from './components/ButtonGroup.jsx';

function App() {
  const [activeForm, setActiveForm] = useState('general'); // Tracks the active form
  const [activeButton, setActiveButton] = useState('general'); // Tracks the active button

  return (
    <div className="app">
      <div className="app-container">
        {/* Pass activeButton and setActiveButton to ButtonGroup */}
        <ButtonGroup
          activeButton={activeButton}
          setActiveForm={setActiveForm}
          setActiveButton={setActiveButton}
        />
        <div id="left-card-row">
          <div id="left-card">
            {activeForm === 'general' && <p>General Information Form</p>}
            {activeForm === 'education' && <p>Education Experience Form</p>}
            {activeForm === 'practical' && <p>Practical Experience Form</p>}
          </div>
        </div>
        <div id="right-card-row">
          <div id="right-card"></div>
        </div>
      </div>
    </div>
  );
}

export default App;