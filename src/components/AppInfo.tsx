import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import TabWizard from './TabWizard'
import { formArray } from '../common/data/dataArray'
// import FormComponent from './FormComponent'
import { useDispatch, useSelector } from 'react-redux'
import { storedFormData } from '../redux/slice/formSlice'

const AppInfo = () => {
  const storedData = useSelector(storedFormData)
  // console.log('storedData', storedData)
  const dispatch = useDispatch();

  // const [selectTab, setSelectTab] = useState<number>(tabArray[0].id);
  // const currentTab = formArray[selectTab - 1]
  // const currentForm = storedData.find((form) => form.title === tabArray[selectTab - 1].tab);

  // const [formData, setFormData] = useState<FormType>({});
  // console.log('formData', formData)
  // const [errors, setErrors] = useState<FormType>({});



  // useEffect(() => {
  //   setFormData(currentForm?.formData || {});
  // }, [currentForm, selectTab]);


  // const isValidate = () => {
  //   const currentTab: tabTypes = formArray[selectTab - 1];
  //   const newError: FormType = {};

  //   currentTab.fields.forEach((key) => {

  //     const value = Array.isArray(formData[key.name]) ? formData[key.name]?.length > 0 : formData[key.name]?.trim() ?? '';

  //     if (!value && !key?.refKey) {
  //       newError[key.name] = `${key.label} is required`
  //     }

  //     if (!value && key?.refKey === formData?.purpose) {
  //       newError[key.name] = `${key.label} is required`
  //     }

  //   })
  //   setErrors(newError);
  //   return Object.keys(newError).length === 0;
  // }



  // const handelNext = () => {

  //   // if (isValidate()) {
  //   setSelectTab(selectTab + 1);
  //   dispatch(addForm({ title: currentTab.tab, formData }));
  //   setFormData({});
  //   // }
  // };


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
                <TabWizard formArray={formArray}/>
                <div className="content-area__main">
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="general"
                      role="tabpanel"
                      aria-labelledby="general-tab"
                    >
                     
                        {/* <FormComponent  handelNext={handelNext} formArray={formArray.app_info}
                          errors={errors} setErrors={setErrors} /> */}
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