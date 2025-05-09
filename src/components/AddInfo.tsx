import React, { useState } from 'react'
import { useSelector } from 'react-redux';

import { errorType, formTabProps } from '../common/types/types';
import { storedFormData } from '../redux/slice/formSlice';
import FormComponent from './FormComponent';
import { formArray } from '../common/data/dataArray';


const AddInfo:React.FC<formTabProps> = (props) => {
  const { handleTab,activeTab } = props;

  const savedData = useSelector(storedFormData);
  const title = 'addInfo'
  const formData = savedData.find(data => data.title === title)

  const [errors, setErrors] = useState<errorType>({});

  const handleSubmit = () => {
   
    handleTab(activeTab+1)
  };

  return (
   

          <FormComponent handelNext={handleSubmit} formArray={formArray.addInfo}
            errors={errors} setErrors={setErrors} title={title} formData={formData?.formData} />
  )
}

export default AddInfo