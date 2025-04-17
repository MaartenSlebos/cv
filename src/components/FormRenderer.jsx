import EducationForm from "./EducationForm";
import GeneralForm from "./GeneralForm";
import PracticalForm from "./PracticalForm";

function FormRenderer({ activeForm }) {
  switch (activeForm) {
    case 'general':
      return <GeneralForm />;
    case 'education':
      return <EducationForm />;
    case 'practical':
      return <PracticalForm />;
    default:
      return <p>Please select a form</p>;
  }
}

export default FormRenderer;