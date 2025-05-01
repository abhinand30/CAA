import React from 'react'
import { formArray } from '../common/data/dataArray'

import TabWizard from './TabWizard'

const AddInfo = () => {
   
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
{/*                  
                    <FormComponent currentTab={currentTab} handelNext={handelNext} formData={formData}
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

export default AddInfo