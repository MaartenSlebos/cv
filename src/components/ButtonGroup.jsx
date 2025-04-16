function ButtonGroup({ setActiveForm }) {
    return (
      <div id="left-button-row">
        <button className="app-btn" id="general-btn" onClick={() => setActiveForm('general')}>
          General Information
        </button>
        <button className="app-btn" id="education-btn" onClick={() => setActiveForm('education')}>
          Education Experience
        </button>
        <button className="app-btn" id="practical-btn" onClick={() => setActiveForm('practical')}>
          Practical Experience
        </button>
      </div>
    );
  }
  
  export default ButtonGroup;