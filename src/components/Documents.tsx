import { useSelector } from 'react-redux';
import { useState } from 'react';

import { formArray } from '../common/data/dataArray'
import { storedFormData } from '../redux/slice/formSlice';
import { errorType } from '../common/types/types';
import FormComponent from './FormComponent';
import { checkValidation } from '../utils/utils';
import GeneralInfoComponent from './GeneralInfoComponent';

declare const bootstrap: any;
const Documents = () => {


  const savedData = useSelector(storedFormData);
  const title = 'documents'
  const formData = savedData.find(data => data.title === title)

  const [errors, setErrors] = useState<errorType>({});

  const handleSubmit = () => {
    const isValidate = checkValidation({ setErrors: setErrors, title: title, storedData: formData });
    if (isValidate) {
      const triggerEl = document.querySelector('#myTab button[data-bs-target="#addInfo"]');
      bootstrap.Tab.getOrCreateInstance(triggerEl).show();
    }

  };


  return (
    <div className="section-wrapper">
      <div className="row">
        <div className="col-12 col-md-9 section-wrapper-content">
          <span className="number-line">0{formArray.documents.id}</span>

          <aside>
            <h3>{formArray.documents.title}</h3>
            <p className="content-opacity">
              A sub-heading is a mini-headline given to a
              subsection or paragraph within a main piece of
              writing. They're smaller than the main headline but
              larger than the paragraph text of the article.
            </p>

            <FormComponent handelNext={handleSubmit} formArray={formArray.documents}
              errors={errors} setErrors={setErrors} title={title} formData={formData?.formData} />
          </aside>


        </div>
        <GeneralInfoComponent />
      </div>
    </div>

  )
}

export default Documents