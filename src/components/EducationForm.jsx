function EducationForm() {
    return (
        <div className="form-container">
            <h2>Edit Education Information</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="school-name">School Name:</label>
                    <input type="text" id="school-name" name="school-name" />

                    <label htmlFor="school-name">School Name:</label>
                    <input type="text" id="school-name" name="school-name" />
                </div>
            </form>

        </div>
    )
}

export default EducationForm;