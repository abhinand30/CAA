import { useState } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { tabArray } from '../common/data/dataArray'
import { fieldsTypes, FormType, tabTypes } from '../common/types/types'
import Tab from '../components/Tab'



const HomePage = () => {
  const [selectTab, setSelectTab] = useState<number>(tabArray[0].id);
  const [formData, setFormData] = useState<FormType>({});
  const [errors,setErrors]=useState<FormType>({});


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState, [name]: value
    }))
    setErrors((prevState) => ({
      ...prevState, [name]: ''
    }))
  }

  const isValidate=()=>{
    const currentTab:tabTypes=tabArray[selectTab-1];
    const newError:FormType={}
    currentTab.fields.forEach((key)=>{
      if(!formData[key.name]?.trim()|| !key?.refKey){
        newError[key.name]=`${key.label} is required`
      }

      if(!formData[key.name]?.trim()&&key?.refKey === formData?.purpose){
        newError[key.name]=`${key.label} is required`
      }
     
    })
    setErrors(newError);
    return Object.keys(errors).length===0;
  }

  const renderField = (field:fieldsTypes) => {

    switch (field.types) {
      case 'text':
      case 'number':
      case 'email':
        return (
          <input
            type={field.types}
            name={field.name}
            value={formData[field.name]}
            onChange={(e) => handleChange(e)}
            className="form-control"
            id={field.name}
            placeholder={field.label}
          />
        );
      case 'select':
        return (
          <select
            name={field.name}
            value={formData[field.name]}
            onChange={(e) => handleChange(e)}
            className="form-control"
            id={field.name}
          >
            <option value={''}></option>
            {field.options?.map((options, index) => (
              <option key={index} value={options} >{options}</option>
            ))}

          </select>
        );
      case 'file':
        return (
          <input
            type="file"
            name={field.name}
            multiple={field.multiple}
            onChange={(e) => handleChange(e)}
            value={formData[field.name]}
            className="form-control"
            id={field.name}
            placeholder={field.label}
          />
        );
        // col-12 col-xl-12 form-group
      case 'textarea':
        return (
          <textarea
            className="form-control"
            placeholder="Please provide additional details"
            onChange={(e) => handleChange(e)}
            defaultValue={""}
          />
        )
      default:
        return null;

    }
  }

  const handelNext=()=>{
    if( isValidate()){
      setSelectTab(selectTab+1);
      setFormData({})
    }
    console.log(isValidate())
  };
  
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
                          <Tab tab={tab} key={tab.id} selectTab={selectTab} handelNext={handelNext}/>
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
                      <div className="section-wrapper">
                        <div className="row">
                          <div className="col-12 col-md-9 section-wrapper-content">
                            <span className="number-line">0{selectTab}</span>
                            <aside>
                              <h3>General Information</h3>
                              <p className="content-opacity">
                                A sub-heading is a mini-headline given to a
                                subsection or paragraph within a main piece of
                                writing. They're smaller than the main headline but
                                larger than the paragraph text of the article.
                              </p>
                              <form className="form-wrapper" onSubmit={(e)=>{e.preventDefault();handelNext()}}>
                                <div className="row">
                                  {tabArray[selectTab-1]?.fields.map((field, index) => (
                                    (!field?.refKey || field?.refKey === formData.purpose ? (
                                      <div key={index} className={`mt-3 col-12 ${field.types==='textarea'?'col-xl-12':'col-md-6'}`}>
                                        <label htmlFor="">
                                          {field.label}
                                        </label>
                                        {renderField(field)}
                                        <div className="validation-wrapper">
                                          
                                             <p className="validation-wrapper">{errors[field.name]}</p>
                                       </div>
                                      </div>
                                    ) : (null))

                                  ))}
                                </div>
                                <div className="btn-pagination">
                                  <button type='submit' className="btn btn-primary">Next</button>
                                </div>
                              </form>

                              {/* <div className="fileUpload">
                                          <input
                                            id="attachment1"
                                            type="file"
                                            className="uploadBtn upload"
                                          />
                                          <input
                                            className="uploadFile path"
                                            placeholder="Choose file"
                                          />
                                          <span>Upload</span>
                                        </div> */}
                              {/* <ul class="validation-wrapper">
                                          <li>
                                             <a>test error</a>
                                          </li>
                                       </ul> */}
                             

                            </aside>

                          </div>
                          <div className="col-12 col-md-3 section-wrapper-box">
                            <div className="information-box">
                              <img src="images/icons/information-icon.svg" />
                              <h4>General information</h4>
                              <p>
                                This form in only Applicable for Qatar Airways
                                Staffs. You will be asked to provide proof to verify
                                it.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="submit"
                      role="tabpanel"
                      aria-labelledby="submit-tab"
                    >
                      <div className="section-wrapper">
                        <div className="row">
                          <div className="col-12">
                            <div className="info">
                              <h3>
                                <span>General Information</span>
                              </h3>
                              <table className="table table-borderless table-review">
                                <tbody>
                                  <tr>
                                    <td width="32%">Application Type</td>
                                    <td>
                                      <img
                                        src="images/icons/table-tick.svg"
                                        className="info__tick-icon"
                                        alt="tick icon"
                                      />{" "}
                                      Renewal
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Applying For</td>
                                    <td>
                                      <img
                                        src="images/icons/table-tick.svg"
                                        className="info__tick-icon"
                                        alt="tick icon"
                                      />
                                      Aircraft Maintenance Personnel
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div className="info">
                              <h3>
                                <span>Applicant Information</span>
                              </h3>
                              <div className="info__profile">
                                <img
                                  src="images/placeholder/profile-image.png"
                                  alt="profile-image"
                                />
                              </div>
                              <table className="table table-borderless table-review">
                                <tbody>
                                  <tr>
                                    <td width="32%">First Name</td>
                                    <td>Alhasan Alsammarraie</td>
                                  </tr>
                                  <tr>
                                    <td>Last Name</td>
                                    <td>Alsammarie</td>
                                  </tr>
                                  <tr>
                                    <td>Name of Employer</td>
                                    <td>Applab</td>
                                  </tr>
                                  <tr>
                                    <td>Contact Number</td>
                                    <td>70960649</td>
                                  </tr>
                                  <tr>
                                    <td>Nationality</td>
                                    <td>Alsammarie</td>
                                  </tr>
                                  <tr>
                                    <td>Passport Validity</td>
                                    <td>Applab</td>
                                  </tr>
                                  <tr>
                                    <td>Date of Birth</td>
                                    <td>70960649</td>
                                  </tr>
                                  <tr>
                                    <td>Validity (Residence ID)</td>
                                    <td>709660649</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div className="info">
                              <h3>
                                <span>Document Required</span>
                              </h3>
                              <table className="table table-borderless table-review">
                                <tbody>
                                  <tr>
                                    <td width="32%">
                                      Passport Showing Personal Information{" "}
                                    </td>
                                    <td>
                                      {" "}
                                      <img
                                        src="images/placeholder/word-document.svg"
                                        alt="pdf icon"
                                      />{" "}
                                      Passport copy.word
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Valid Staff ID</td>
                                    <td>
                                      <img
                                        src="images/placeholder/pdf.svg"
                                        alt="pdf icon"
                                      />{" "}
                                      Passport copy.pdf
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Passport Showing Personal Information </td>
                                    <td>
                                      <img
                                        src="images/placeholder/pdf.svg"
                                        alt="pdf icon"
                                      />{" "}
                                      Passport copy.pdf
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Valid Staff ID</td>
                                    <td>
                                      <img
                                        src="images/placeholder/pdf.svg"
                                        alt="pdf icon"
                                      />{" "}
                                      Passport copy.pdf
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div className="btn-pagination btn-pagination__review">
                              <button className="btn btn-cancel">Cancel</button>
                              <button className="btn btn-save">
                                Save as Draft
                              </button>
                              <button className="btn btn-primary btn-continue">
                                Submit Form
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      {/*  */}
    </>

  )
}

export default HomePage