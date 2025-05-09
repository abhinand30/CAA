import { useSelector } from 'react-redux';
import { useState } from 'react';

import { formArray } from '../common/data/dataArray'
import { storedFormData } from '../redux/slice/formSlice';
import { errorType, formTabProps } from '../common/types/types';
import FormComponent from './FormComponent';
import { checkValidation } from '../utils/utils';


const Documents:React.FC<formTabProps> = (props) => {
  

  const savedData = useSelector(storedFormData);
  const title = 'documents'
  const formData = savedData.find(data => data.title === title)

  const [errors, setErrors] = useState<errorType>({});

  const handleSubmit = () => {
    const isValidate = checkValidation({ setErrors, title, storedData: formData });
  
    if (isValidate) {
      const activeTabElement = document.querySelector(".nav-link.active");
      if (activeTabElement) {
        const nextTab = activeTabElement.closest("li")?.nextElementSibling?.querySelector(".nav-link");
        nextTab?.onClick();
      }
    }
  };
  
  return (
    
          <FormComponent handelNext={handleSubmit} formArray={formArray.documents}
            errors={errors} setErrors={setErrors} title={title} formData={formData?.formData} />

  )
}

export default Documents