function EducationForm() {
    return (
        <form className="form-container">
          <h3 className="form-name">Edit Education Experience</h3>
          <div className="form-grid">
            <label htmlFor="school">School:</label>
            <input id="school" type="text" placeholder="Enter your school" />
    
            <label htmlFor="study">Study:</label>
            <input id="study" type="test" placeholder="Enter your study name" />
    
            <label htmlFor="graduationDate">Year:</label>
            <input id="graduationDate" type="number" placeholder="Enter your graduation year" min="2000" max="2100" />
          </div>
          <button type="submit" className="submit-btn">Save</button>
        </form>
      );
}

export default EducationForm;