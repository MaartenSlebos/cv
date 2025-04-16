import './App.css';
import { useState } from 'react';
import ButtonGroup from './components/ButtonGroup.jsx';


function App() {
  const [activeForm, setActiveForm] = useState('general');


  return (
    <div className="app">
      <div className="app-container">
        <div>
          <ButtonGroup setActiveForm={setActiveForm} />
        </div>
        <div id="right-button-row"></div>
        <div id="left-card-row">
          <div id="left-card">
            {activeForm === 'general' && <p>General Information Form</p>}
            {activeForm === 'education' && <p>Education Experience Form</p>}
            {activeForm === 'practical' && <p>Practical Experience Form</p>}
          </div>
        </div>
        <div id="right-card-row">
          <div id="right-card">

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;