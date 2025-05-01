// import React from 'react'
// import Footer from './Footer'
// import FormComponent from './FormComponent'
// import Tab from './TabWizard'
// import Header from './Header'
import { formArray } from '../common/data/dataArray'
import TabWizard from './TabWizard'

const Documents = () => {
    // const {formArray}=props;
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
                     
                        {/* <FormComponent formArray={formArray} handelNext={handelNext} formData={formData}
                          setFormData={setFormData} errors={errors} setErrors={setErrors} /> */}
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