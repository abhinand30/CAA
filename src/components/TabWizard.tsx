import React from 'react'
// import { tabProps } from '../common/types/types'
// import { useSelector } from 'react-redux'
// import { storedFormData } from '../redux/slice/formSlice'

const TabWizard = (props) => {
  const { formArray } = props;

  // const storedData = useSelector(storedFormData);
  // console.log(tab.title,'<<')
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

            {Object.values(formArray).map((tab) => (
              <li
                key={tab?.id}
                className={`nav-item nav-fill form-wizard__filled`}
                role="presentation"
              >
                <button
                  // onClick={()=>onClick(tab.id)}
                  className={`nav-link  'active'}`}
                  id="general-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#general"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  <span className="form-wizard__completed" />
                  <span className="form-wizard__no">0{tab?.id}</span>
                  {tab.title}
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