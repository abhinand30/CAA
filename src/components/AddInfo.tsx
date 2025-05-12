import { useState } from 'react'
import { useSelector } from 'react-redux';

import { errorType, } from '../common/types/types';
import { storedFormData } from '../redux/slice/formSlice';
import FormComponent from './FormComponent';
import { formArray } from '../common/data/dataArray';
import GeneralInfoComponent from './GeneralInfoComponent';


declare const bootstrap: any;
const AddInfo = () => {
  const savedData = useSelector(storedFormData);

  const title = 'addInfo'
  const formData = savedData.find(data => data.title === title)

  const [errors, setErrors] = useState<errorType>({});

  const handleSubmit = () => {
    const triggerEl = document.querySelector('#myTab button[data-bs-target="#summary"]');
    bootstrap.Tab.getOrCreateInstance(triggerEl).show();
  };

  return (
    <div className="section-wrapper">
      <div className="row">
        <div className="col-12 col-md-9 section-wrapper-content">
          <span className="number-line">0{formArray.addInfo.id}</span>

          <aside>
            <h3>{formArray.addInfo.title}</h3>
            <p className="content-opacity">
              A sub-heading is a mini-headline given to a
              subsection or paragraph within a main piece of
              writing. They're smaller than the main headline but
              larger than the paragraph text of the article.
            </p>
            <FormComponent handelNext={handleSubmit} formArray={formArray.addInfo}
              errors={errors} setErrors={setErrors} title={title} formData={formData?.formData} />
          </aside>
        </div>
        <GeneralInfoComponent />
      </div>
    </div>
  )
}

export default AddInfo