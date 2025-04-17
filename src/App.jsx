import './App.css';
import { useState, useEffect } from 'react';
import ButtonGroup from './components/ButtonGroup.jsx';
import FormRenderer from './components/FormRenderer.jsx';
import githublogo from './assets/github.png';

function EditableSection({ title, data, fields, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(data);

  // Update editData when data prop changes
  useEffect(() => {
    setEditData(data);
  }, [data]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setEditData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editData);
    setIsEditing(false);
  };

  // Check if there's any data to edit
  const hasData = Object.values(data).some(value => value && value.trim() !== '');

  return (
    <div className={`right-card-section ${isEditing ? 'editing' : ''}`}>
      <h3>{title}</h3>
      {isEditing ? (
        <form onSubmit={handleSubmit} className="inline-edit-form">
          {Object.entries(fields).map(([key, label]) => (
            <div key={key} className="inline-form-field">
              <input
                id={key}
                type={key === 'email' ? 'email' : key === 'phone' ? 'tel' : key.includes('year') ? 'number' : 'text'}
                value={editData[key] || ''}
                onChange={handleChange}
                placeholder={`Enter ${label}`}
                {...(key.includes('year') ? { min: "2000", max: "2100" } : {})}
              />
            </div>
          ))}
          <div className="inline-form-buttons">
            <button type="submit" className="save-btn">Save</button>
            <button 
              type="button" 
              className="cancel-btn" 
              onClick={() => {
                setIsEditing(false);
                setEditData(data);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          {Object.entries(data).map(([key, value]) => (
            <p key={key}>{value || ''}</p>
          ))}
          {hasData && (
            <button onClick={() => setIsEditing(true)} className="edit-btn">
              Edit
            </button>
          )}
        </>
      )}
    </div>
  );
}

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

  const sections = {
    general: {
      title: "General Information",
      fields: {
        name: "Name",
        email: "Email",
        phone: "Phone"
      }
    },
    education: {
      title: "Education Experience",
      fields: {
        school: "School",
        study: "Study",
        graduationDate: "Graduation Year"
      }
    },
    practical: {
      title: "Practical Experience",
      fields: {
        company: "Company",
        role: "Role",
        year: "Year"
      }
    }
  };

  return (
    <div className="app">
      <div className="app-container">
        <ButtonGroup
          activeButton={activeButton}
          setActiveForm={setActiveForm}
          setActiveButton={setActiveButton}
        />
        <div id="github-link-row"> <a href="https://github.com/MaartenSlebos" target="_blank" rel="noopener noreferrer" id="github-link"><img src={githublogo} id="github-logo"></img></a></div>
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
            {Object.entries(sections).map(([key, section]) => (
              <EditableSection
                key={key}
                title={section.title}
                data={submittedData[key]}
                fields={section.fields}
                onSave={(data) => updateSubmittedData(key, data)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;