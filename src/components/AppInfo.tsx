import { useState } from 'react'
import { useSelector, } from 'react-redux'

import { formArray } from '../common/data/dataArray'
import { FormType } from '../common/types/types'
import FormComponent from './FormComponent'
import { storedFormData } from '../redux/slice/formSlice'
import { checkValidation } from '../utils/utils'

const AppInfo = (props) => {
  const { handleTab } = props;

  const savedData = useSelector(storedFormData);
  const title = 'appInfo'
  const formData = savedData.find(data => data.title === title)

  const [errors, setErrors] = useState<FormType>({});

  const handleSubmit = () => {
    const isValidate = checkValidation({ setErrors: setErrors, title: title, storedData: formData });
    if (isValidate) {
      handleTab('documents')
    }
  };


  return (
    <div className="content-area__main">
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="general"
          role="tabpanel"
          aria-labelledby='appInfo'
        // "general-tab"
        >

          <FormComponent handelNext={handleSubmit} formArray={formArray.appInfo}
            errors={errors} setErrors={setErrors} title={title} formData={formData?.formData} />
        </div>
      </div>
    </div>
  )
}

export default AppInfo