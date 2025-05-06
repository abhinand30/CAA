import { useState } from 'react'
import { useSelector } from 'react-redux';

import { FormType } from '../common/types/types';
import { checkValidation } from '../utils/utils';
import { storedFormData } from '../redux/slice/formSlice';
import FormComponent from './FormComponent';
import { formArray } from '../common/data/dataArray';


const AddInfo = (props) => {
  const { handleTab } = props;

  const savedData = useSelector(storedFormData);
  const title = 'addInfo'
  const formData = savedData.find(data => data.title === title)

  const [errors, setErrors] = useState<FormType>({});

  const handleSubmit = () => {
    const isValidate = checkValidation({ setErrors: setErrors, title: title, storedData: formData });

    if (isValidate) {
      handleTab('summary')
    }
  };

  return (
    <div className="content-area__main">
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="general"
          role="tabpanel"
          aria-labelledby="general-tab"
        >

          <FormComponent handelNext={handleSubmit} formArray={formArray.addInfo}
            errors={errors} setErrors={setErrors} title={title} formData={formData?.formData} />
        </div>
      </div>
    </div>
  )
}

export default AddInfo