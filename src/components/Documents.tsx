import { useSelector } from 'react-redux';
import { useState } from 'react';

import { formArray } from '../common/data/dataArray'

import { storedFormData } from '../redux/slice/formSlice';
import { FormType } from '../common/types/types';
import FormComponent from './FormComponent';
import { checkValidation } from '../utils/utils';
// import { checkValidation} from '../utils/utils';

const Documents = (props) => {
  const { handleTab } = props;
  const savedData = useSelector(storedFormData);
  const title = 'documents'
  const formData = savedData.find(data => data.title === title)

  const [errors, setErrors] = useState<FormType>({});

  const handleSubmit = () => {
    const isValidate = checkValidation({ setErrors: setErrors, title: title, storedData: formData });

    if (isValidate) {
      handleTab('addInfo')
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