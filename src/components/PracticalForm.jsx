export default function PracticalForm() {
    return (
        <form className="form-container">
          <h3 className="form-name">Edit Practical Experience</h3>
          <div className="form-grid">
            <label htmlFor="company">Company:</label>
            <input id="company" type="text" placeholder="Enter the company" />
    
            <label htmlFor="role">Role:</label>
            <input id="role" type="text" placeholder="Enter your role" />
    
            <label htmlFor="year">Year:</label>
            <input id="year" type="number" placeholder="Enter your end date" min="2000" max="2100" />
          </div>
          <button type="submit" className="submit-btn">Save</button>
        </form>
      );
}