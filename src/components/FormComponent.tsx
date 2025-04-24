import React from 'react';

import { fieldsTypes, FormComponentProps } from '../common/types/types';


const FormComponent: React.FC<FormComponentProps> = (props) => {
    const { currentTab, handelNext, formData, setFormData, setErrors, errors } = props;
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type, files } = e.target;
        if (name === 'purpose') {
            setFormData({})
        }
        if (type === 'file') {
            const fileList = files ? Array.from(files) : [];
            setFormData((prevState) => ({
                ...prevState, [name]: fileList
            }))
        } else {
            setFormData((prevState) => ({
                ...prevState, [name]: value
            }))
        }
        setErrors((prevState) => ({
            ...prevState, [name]: ''
        }))
    }


    const renderField = (field: fieldsTypes) => {

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
                        <option value={''}>{field.label}</option>
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
                        className="form-control"
                        // value={formData[field.name]}
                        id={field.name}
                        placeholder={field.label}
                    />
                );
            // col-12 col-xl-12 form-group
            case 'textarea':
                return (
                    <textarea
                        className="form-control"
                        name={field.name}
                        placeholder={`Please provide ${field.label}`}
                        onChange={(e) => handleChange(e)}
                        value={formData[field.name]}
                    />
                )
            default:
                return null;
        }
    }


    return (
        <div className="section-wrapper">
            <div className="row">
                <div className="col-12 col-md-9 section-wrapper-content">
                    <span className="number-line">0{currentTab.id}</span>

                    <aside>
                        <h3>{currentTab.tab}</h3>
                        <p className="content-opacity">
                            A sub-heading is a mini-headline given to a
                            subsection or paragraph within a main piece of
                            writing. They're smaller than the main headline but
                            larger than the paragraph text of the article.
                        </p>

                        <form className="form-wrapper" onSubmit={(e) => { e.preventDefault(); handelNext() }}>
                            <div className="row">

                                {currentTab?.fields.map((field, index) => (
                                    (!field?.refKey || field?.refKey === formData.purpose ? (
                                        <div key={index} className={`mt-3 col-12 ${field.types === 'textarea' ? 'col-xl-12' : 'col-md-6'}`}>
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
                {/* <div className="col-12 col-md-3 section-wrapper-box">
                            <div className="information-box">
                              <img src="images/icons/information-icon.svg" />
                              <h4>General information</h4>
                              <p>
                                This form in only Applicable for Qatar Airways
                                Staffs. You will be asked to provide proof to verify
                                it.
                              </p>
                            </div>
                          </div> */}
            </div>
        </div>
    )
}

export default FormComponent