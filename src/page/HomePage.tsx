import {  useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { formArray, tabArray } from '../common/data/dataArray'
import { FormType, tabTypes } from '../common/types/types'
import Tab from '../components/Tab'
import SummaryComponent from '../components/SummaryComponent'
import { addForm, storedFormData } from '../redux/slice/formSlice'
import FormComponent from '../components/FormComponent'



const HomePage = () => {
  const storedData = useSelector(storedFormData)
// console.log('storedData', storedData)
  const dispatch = useDispatch();

  const [selectTab, setSelectTab] = useState<number>(tabArray[0].id);
  const currentTab = formArray[selectTab - 1]
  const currentForm=storedData.find((form)=>form.title===tabArray[selectTab-1].tab);

  const [formData, setFormData] = useState<FormType>({});
  console.log('formData', formData)
  const [errors, setErrors] = useState<FormType>({});



  useEffect(() => {
    setFormData(currentForm?.formData|| {});
  }, [currentForm,selectTab]);

  
  const isValidate = () => {
    const currentTab: tabTypes = formArray[selectTab - 1];
    const newError: FormType = {};

    currentTab.fields.forEach((key) => {
      
      const value = Array.isArray(formData[key.name]) ? formData[key.name]?.length>0 : formData[key.name]?.trim() ?? '';
      
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


 
  const handelNext = () => {
   
    // if (isValidate()) {
    setSelectTab(selectTab + 1);
    dispatch(addForm({ title: currentTab.tab, formData }));
    setFormData({});
    // }
  };


  const handlePrevious = (id: number) => {
    if(storedData.length>=id){
      setSelectTab(id);
    }
  }


  return (
    <>
      <Header />
      <main>
        <div className="container ">
          <div className="row">
            <div className="col-12">

              <div className="content-area">
                <div className="content-area__head-block">
                  <div className="content-area__head-block__wrapper">
                    <div className="nav-scroller">
                      <button
                        type="button"
                        className="nav-scroller-btn nav-scroller-btn--left"
                        aria-label="Scroll left"
                      >
                        <svg
                          // title="Left arrow"
                          className="nav-scroller-icon"
                          width={21}
                          height={32}
                          viewBox="0 0 21 32"
                        >
                          <path d="M0 16l4.736-4.768L16 0l4.736 4.736L9.504 16l11.232 11.264L16 32 4.736 20.736z" />
                        </svg>
                      </button>
                      <ul
                        className="nav nav-tabs nav-pills nav-fill form-wizard"
                        id="myTab"
                        role="tablist"
                      >

                        {tabArray.map((tab) => (
                          <Tab tab={tab} key={tab.id} selectTab={selectTab} onClick={handlePrevious} />
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>

                <div className="content-area__main">
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="general"
                      role="tabpanel"
                      aria-labelledby="general-tab"
                    >
                      {currentTab.id === 4 ? (
                        <SummaryComponent />
                      ) : (
                        <FormComponent currentTab={currentTab} handelNext={handelNext} formData={formData}
                          setFormData={setFormData} errors={errors} setErrors={setErrors} />
                      )}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    
    </>

  )
}

export default HomePage