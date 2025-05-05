import React, { useState } from 'react'

import TabWizard from './TabWizard'
import { formArray } from '../common/data/dataArray'
// import FormComponent from './FormComponent'
import { useDispatch,} from 'react-redux'
import { addForm } from '../redux/slice/formSlice'
import { FormType, tabTypes } from '../common/types/types'
import FormComponent from './FormComponent'

const AppInfo = (props) => {
  const {handleTab}=props;
  // const formData = useSelector(storedFormData)
  // console.log('storedData', storedData)
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


// console.log(formData)
  const handleSubmit = () => {

    // if (isValidate()) {
    // setSelectTab(selectTab + 1);
    handleTab('documents')
    dispatch(addForm({ title: 'appInfo', formData }));
    // setFormData({});
    // }
  };


  // const handlePrevious = (id: number) => {
  //   if (storedData.length >= id) {
  //     setSelectTab(id);
  //   }
  // }
    
  return (
  
    <main>
        <div className="container ">
          <div className="row">
            <div className="col-12">

              <div className="content-area">
              <TabWizard handleTab={handleTab} tabItem={'appInfo'}/>
                <div className="content-area__main">
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="general"
                      role="tabpanel"
                      aria-labelledby='appInfo'
                      // "general-tab"
                    >
                     
                        <FormComponent  handelNext={handleSubmit} formArray={formArray.appInfo}
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

export default AppInfo