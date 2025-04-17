import { useState } from 'react';

export default function PracticalForm({ updateSubmittedData }) {
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    year: "",
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
    updateSubmittedData('practical', formData);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h3 className="form-name">Edit Practical Experience</h3>
      <div className="form-grid">
        <label htmlFor="company">Company:</label>
        <input
          id="company"
          type="text"
          placeholder="Enter the company"
          value={formData.company}
          onChange={handleChange}
        />

        <label htmlFor="role">Role:</label>
        <input
          id="role"
          type="text"
          placeholder="Enter your role"
          value={formData.role}
          onChange={handleChange}
        />

        <label htmlFor="year">Year:</label>
        <input
          id="year"
          type="number"
          placeholder="Enter your end date"
          min="2000"
          max="2100"
          value={formData.year}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="submit-btn">Save</button>
    </form>
  );
}