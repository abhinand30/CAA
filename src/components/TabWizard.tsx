import React from 'react'
import { useSelector } from 'react-redux';

import { formArray } from '../common/data/dataArray'
import { storedFormData } from '../redux/slice/formSlice';
import { checkValidation, findFormData } from '../utils/utils';

const TabWizard = (props) => {
  const { handleTab,activeTab } = props;
  const storedData=useSelector(storedFormData)
  

  return (
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

            {Object.keys(formArray).map((key) => (
              <li
                key={formArray[key].id}
                className={`nav-item nav-fill ${checkValidation({storedData:findFormData({savedData:storedData,title:key}),title:key})?'form-wizard__filled':''}`}
                // form-wizard__filled
                role="presentation"
              >
                <button
                  onClick={()=>handleTab(key)}
                  className={`nav-link ${activeTab===key&&'active'}`}
                  id="general-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#general"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  <span className="form-wizard__completed" />
                  <span className="form-wizard__no">0{formArray[key].id}</span>
                  {formArray[key].title}
                </button>
              </li>
            ))}

          </ul>
        </div>

      </div>
    </div>

  )
}

export default TabWizard