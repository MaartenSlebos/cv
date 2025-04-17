export default function PracticalForm() {
    return (
        <form className="form-container">
          <h3 class="form-name">Edit Practical Experience</h3>
          <div className="form-grid">
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" placeholder="Enter your name" />
    
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" placeholder="Enter your email" />
    
            <label htmlFor="phone">Phone:</label>
            <input id="phone" type="tel" placeholder="Enter your phone number" />
          </div>
          <button type="submit" className="submit-btn">Save</button>
        </form>
      );
}