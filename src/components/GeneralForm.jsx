import { useState } from "react";

function GeneralForm({ updateSubmittedData }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
    updateSubmittedData('general', formData);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h3 className="form-name">Edit General Information</h3>
      <div className="form-grid">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="phone">Phone:</label>
        <input
          id="phone"
          type="tel"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="submit-btn">Save</button>
    </form>
  );
}

export default GeneralForm;