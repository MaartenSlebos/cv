import { useState } from 'react';

function EducationForm({ updateSubmittedData }) {
  const [formData, setFormData] = useState({
    school: "",
    study: "",
    graduationDate: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSubmittedData('education', formData);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h3 className="form-name">Edit Education Experience</h3>
      <div className="form-grid">
        <label htmlFor="school">School:</label>
        <input
          id="school"
          type="text"
          placeholder="Enter your school"
          value={formData.school}
          onChange={handleChange}
        />

        <label htmlFor="study">Study:</label>
        <input
          id="study"
          type="text"
          placeholder="Enter your study name"
          value={formData.study}
          onChange={handleChange}
        />

        <label htmlFor="graduationDate">Year:</label>
        <input
          id="graduationDate"
          type="number"
          placeholder="Enter your graduation year"
          value={formData.graduationDate}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="submit-btn">Save</button>
    </form>
  );
}

export default EducationForm;