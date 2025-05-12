import { useState } from 'react'
import { useSelector } from 'react-redux';

import { formArray } from '../common/data/dataArray'
import { storedFormData } from '../redux/slice/formSlice';
import { checkValidation, findFormData } from '../utils/utils';


type FormKeys = keyof typeof formArray;

const TabWizard = () => {

  const [activeTab, setActiveTab] = useState<number>(1);
  const storedData = useSelector(storedFormData);


  const isDisabled = (id: number): boolean => {
    const currentTabs = Object.keys(formArray);
    const title = currentTabs[activeTab - 1];

    if (activeTab > id || title === 'addInfo') {
      return false;
    }

    const isValidate = checkValidation({
      storedData: findFormData({ savedData: storedData, title: title })||undefined,
      title: title,
    });

    return !isValidate;
  };

  const handleTabClick = (id: number) => {
    if (!isDisabled(id)) {
      setActiveTab(id);
    }
  };


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
                key={formArray[key as FormKeys].id}
                className={`nav-item nav-fill ${checkValidation({ storedData: findFormData({ savedData: storedData, title: key })||undefined, title: key }) ? 'form-wizard__filled' : ''}`}
                role="presentation"
              >
                <button
                  className={`nav-link ${activeTab === formArray[key as FormKeys].id && 'active'}`}
                  data-bs-toggle={`tab`}
                  data-bs-target={`#${key}`}
                  role="tab"
                  aria-controls={key}
                  aria-selected={true}
                  disabled={isDisabled(formArray[key as FormKeys].id)}
                  onClick={() => handleTabClick(formArray[key as FormKeys].id)}
                >
                  <span className="form-wizard__completed" />
                  <span className="form-wizard__no">0{formArray[key as FormKeys].id}</span>
                  {formArray[key as FormKeys].title}
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