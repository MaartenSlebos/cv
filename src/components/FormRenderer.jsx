import EducationForm from "./EducationForm";
import GeneralForm from "./GeneralForm";
import PracticalForm from "./PracticalForm";

function FormRenderer({ activeForm, updateSubmittedData }) {
  switch (activeForm) {
    case 'general':
      return <GeneralForm updateSubmittedData={updateSubmittedData} />;
    case 'education':
      return <EducationForm updateSubmittedData={updateSubmittedData} />;
    case 'practical':
      return <PracticalForm updateSubmittedData={updateSubmittedData} />;
    default:
      return <p>Please select a form</p>;
  }
}

export default FormRenderer;