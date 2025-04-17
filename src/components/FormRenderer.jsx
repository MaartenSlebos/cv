function FormRenderer({ activeForm }) {
  switch (activeForm) {
    case 'general':
      return <p>General Information Form</p>;
    case 'education':
      return <p>Education Experience Form</p>;
    case 'practical':
      return <p>Practical Experience Form</p>;
    default:
      return <p>Please select a form</p>;
  }
}

export default FormRenderer;