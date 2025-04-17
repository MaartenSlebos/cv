import './App.css';
import { useState } from 'react';
import ButtonGroup from './components/ButtonGroup.jsx';
import FormRenderer from './components/FormRenderer.jsx';

function App() {
  const [activeForm, setActiveForm] = useState('general'); 
  const [activeButton, setActiveButton] = useState('general'); 
  const [submittedData, setSubmittedData] = useState({
    general: {},
    education: {},
    practical: {},
  });

  const updateSubmittedData = (formName, data) => {
    setSubmittedData((prevData) => ({
      ...prevData,
      [formName]: data,
    }));
  };

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
            <FormRenderer 
              key={activeForm} 
              activeForm={activeForm} 
              updateSubmittedData={updateSubmittedData} 
            />
          </div>
        </div>
        <div id="right-card-row">
          <div id="right-card">
            <div id="right-card-general">
              <h3>General Information</h3>
              <p>{submittedData.general.name || ''}</p>
              <p>{submittedData.general.email || ''}</p>
              <p>{submittedData.general.phone || ''}</p>
            </div>
            <div id="right-card-education">
              <h3>Education Experience</h3>
              <p>{submittedData.education.school || ''}</p>
              <p>{submittedData.education.study || ''}</p>
              <p>{submittedData.education.graduationDate || ''}</p>
            </div>
            <div id="right-card-practical">
              <h3>Practical Experience</h3>
              <p>{submittedData.practical.company || ''}</p>
              <p>{submittedData.practical.role || ''}</p>
              <p>{submittedData.practical.year || ''}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;