import React, { useState } from 'react'
import { formArray } from '../common/data/dataArray'
import { useDispatch } from 'react-redux';

import TabWizard from './TabWizard'
import { FormType } from '../common/types/types';
import FormComponent from './FormComponent';
import { addForm } from '../redux/slice/formSlice';

const AddInfo = (props) => {
  const {handleTab}=props;
 
  const dispatch = useDispatch();

  // const currentTab = formArray[selectTab - 1]
  // const currentForm = storedData.find((form) => form.title === tabArray[selectTab - 1].tab);

  const [formData, setFormData] = useState<FormType>({});
  // console.log('formData', formData)
  const [errors, setErrors] = useState<FormType>({});



  // useEffect(() => {
  //   setFormData(currentForm?.formData || {});
  // }, [currentForm, selectTab]);


  const isValidate = () => {
    const currentTab: tabTypes = formArray.appInfo;
    const newError: FormType = {};

    currentTab.fields.forEach((key) => {

      const value = Array.isArray(formData[key.name]) ? formData[key.name]?.length > 0 : formData[key.name]?.trim() ?? '';

      if (!value && !key?.refKey) {
        newError[key.name] = `${key.label} is required`
      }

      if (!value && key?.refKey === formData?.purpose) {
        newError[key.name] = `${key.label} is required`
      }

    })
    setErrors(newError);
    return Object.keys(newError).length === 0;
  }


console.log(formData)
  const handleSubmit = () => {

    // if (isValidate()) {
    // setSelectTab(selectTab + 1);
    handleTab('summary')
    dispatch(addForm({ title: 'addInfo', formData }));
    // setFormData({});
    // }
  };

   
  return (
    
    <main>
    <div className="container ">
      <div className="row">
        <div className="col-12">

          <div className="content-area">
           <TabWizard handleTab={handleTab} tabItem={'addInfo'}/>

            <div className="content-area__main">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="general"
                  role="tabpanel"
                  aria-labelledby="general-tab"
                >
                 
                 <FormComponent  handelNext={handleSubmit} formArray={formArray.addInfo}
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

export default AddInfo