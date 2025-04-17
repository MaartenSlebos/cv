function ButtonGroup({ activeButton, setActiveForm, setActiveButton }) {
  return (
    <div id="left-button-row">
      <button
        className={`app-btn ${activeButton === 'general' ? 'active' : ''}`}
        id="general-btn"
        onClick={() => {
          setActiveForm('general');
          setActiveButton('general');
        }}
      >
        General Information
      </button>
      <button
        className={`app-btn ${activeButton === 'education' ? 'active' : ''}`}
        id="education-btn"
        onClick={() => {
          setActiveForm('education');
          setActiveButton('education');
        }}
      >
        Education Experience
      </button>
      <button
        className={`app-btn ${activeButton === 'practical' ? 'active' : ''}`}
        id="practical-btn"
        onClick={() => {
          setActiveForm('practical');
          setActiveButton('practical');
        }}
      >
        Practical Experience
      </button>
    </div>
  );
}

export default ButtonGroup;