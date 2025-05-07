import { useSelector } from 'react-redux';
import { useState } from 'react';

import { formArray } from '../common/data/dataArray'

import { storedFormData } from '../redux/slice/formSlice';
import { errorType, formTabProps } from '../common/types/types';
import FormComponent from './FormComponent';
import { checkValidation } from '../utils/utils';


const Documents:React.FC<formTabProps> = (props) => {
  const { handleTab,activeTab } = props;

  const savedData = useSelector(storedFormData);
  const title = 'documents'
  const formData = savedData.find(data => data.title === title)

  const [errors, setErrors] = useState<errorType>({});

  const handleSubmit = () => {
    const isValidate = checkValidation({ setErrors: setErrors, title: title, storedData: formData });
    if (isValidate) {
      handleTab(activeTab+1)
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
          <FormComponent handelNext={handleSubmit} formArray={formArray.documents}
            errors={errors} setErrors={setErrors} title={title} formData={formData?.formData} />

        </div>
      </div>
    </div>
  )
}

export default Documents