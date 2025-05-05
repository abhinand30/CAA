import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { formArray } from '../common/data/dataArray'
import TabWizard from './TabWizard'
import { addForm, storedFormData } from '../redux/slice/formSlice';
import { FormType } from '../common/types/types';
import FormComponent from './FormComponent';
import { checkValidation} from '../utils/utils';

const Documents = (props) => {
    const {handleTab}=props;
    const storedData = useSelector(storedFormData)
    
    const dispatch = useDispatch();
  
    // const currentTab = formArray[selectTab - 1]
    // const currentForm = storedData.find((form) => form.title === tabArray[selectTab - 1].tab);
  
    const [formData, setFormData] = useState<FormType>({});
    const [errors, setErrors] = useState<FormType>({});
    // console.log('formData', formData)
   
  
  
  
    
    const handleSubmit = () => {
      const isValidate=checkValidation({currentForm:formArray.documents,formData,setErrors})
      if (isValidate) {
        handleTab('addInfo')
        dispatch(addForm({ title:'documents', formData }));
        setFormData({});
      }
      };
  
  return (

    <main>
        <div className="container ">
          <div className="row">
            <div className="col-12">

              <div className="content-area">
                <TabWizard handleTab={handleTab} tabItem={'documents'}/>

                <div className="content-area__main">
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="general"
                      role="tabpanel"
                      aria-labelledby="general-tab"
                    >
                     
                     <FormComponent  handelNext={handleSubmit} formArray={formArray.documents}
                          errors={errors} setErrors={setErrors} setFormData={setFormData}  formData={formData}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}

export default Documents