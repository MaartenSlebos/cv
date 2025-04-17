import './App.css';
import { useState } from 'react';
import ButtonGroup from './components/ButtonGroup.jsx';
import FormRenderer from './components/FormRenderer.jsx';

function App() {
  const [activeForm, setActiveForm] = useState('general'); 
  const [activeButton, setActiveButton] = useState('general'); 

  return (
    <div className="app">
      <div className="app-container">
        <ButtonGroup
          activeButton={activeButton}
          setActiveForm={setActiveForm}
          setActiveButton={setActiveButton}
        />
        <div id="left-card-row">
          <div id="left-card">
            <FormRenderer key={activeForm} activeForm={activeForm} />
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