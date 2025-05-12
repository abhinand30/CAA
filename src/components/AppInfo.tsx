import { useState } from 'react'
import { useSelector, } from 'react-redux'

import { formArray } from '../common/data/dataArray'
import { errorType } from '../common/types/types'
import FormComponent from './FormComponent'
import { storedFormData } from '../redux/slice/formSlice'
import { checkValidation } from '../utils/utils'
import GeneralInfoComponent from './GeneralInfoComponent'

declare const bootstrap: any;

const AppInfo = () => {
  const savedData = useSelector(storedFormData);

  const title = 'appInfo';
  const formData = savedData.find(data => data.title === title)

  const [errors, setErrors] = useState<errorType>({});

  const handleSubmit = () => {
    const isValidate = checkValidation({ setErrors: setErrors, title: title, storedData: formData });
    if (isValidate) {
      const triggerEl = document.querySelector('#myTab button[data-bs-target="#documents"]');
      bootstrap.Tab.getOrCreateInstance(triggerEl).show();
    }
  };

  return (
    <div className="section-wrapper">
      <div className="row">
        <div className="col-12 col-md-9 section-wrapper-content">
          <span className="number-line">{formArray.appInfo.id}</span>
          <aside>
            <h3>{formArray.appInfo.title}</h3>
            <p className="content-opacity">
              A sub-heading is a mini-headline given to a
              subsection or paragraph within a main piece of
              writing. They're smaller than the main headline but
              larger than the paragraph text of the article.
            </p>

            <FormComponent handelNext={handleSubmit} formArray={formArray.appInfo}
              errors={errors} setErrors={setErrors} title={title} formData={formData?.formData} />
          </aside>
        </div>
        <GeneralInfoComponent />
      </div>
    </div>


  )
}

export default AppInfo