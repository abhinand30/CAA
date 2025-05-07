import React from 'react';
import { useDispatch } from 'react-redux';

import { fieldsTypes, fileType, FormComponentProps } from '../common/types/types';
import { addFileArray, deleteFileArray, updateField } from '../redux/slice/formSlice';




const FormComponent: React.FC<FormComponentProps> = (props) => {
  
  const { formArray, handelNext, formData, setErrors, errors, title } = props;

  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, index?: number) => {
    const { name, value, type } = e.target;
    const files = (e.target as HTMLInputElement).files;
    const fileName = files?.[0]?.name ?? '';
    dispatch(updateField({ title, name, value: type === 'file' ? fileName : value, index }))

    setErrors((prevState) => ({
      ...prevState, [name]: ''
    }))

  }


  const handleAddFileArray = (fieldName: string) => {
    console.log(fieldName)
    dispatch(addFileArray({ title: title, name: fieldName }))
  };

  const handleRemoveFileArray = (fieldName: string, id: number) => {
   
    dispatch(deleteFileArray({ title: title, name: fieldName, index: id }))
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
          <>
          <div className='d-flex'>
        
            <div className='multiple-upload '>
              <aside>
                <div className="fileUpload fileUpload--preview fileUpload--loader">
                  <input
                    type="file"
                    className="uploadBtn upload"
                    name={field.name}
                    onChange={(e) => handleChange(e, 0)}
                  />
                  {formData[field.name]?.length > 0 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveFileArray(field.name, 0)}
                      className='uploadBtn'
                    >
                      <i className="fa fa-times">X</i>
                    </button>
                  )}
                  <input
                    className="uploadFile path"
                    placeholder="Choose file"
                    value={formData[field.name]?.[0]?.fileName || ''}
                    readOnly
                  />
                  <span>Upload</span>
                </div>
                <span className="upload-error">Accepted Formats (.pdf/.xlsx/.png/.jpeg)</span>
              </aside>
            </div>
        
            {field.multiple && (
              <button
                type="button"
                className="multiple-upload__plus"
                onClick={() =>handleAddFileArray(field.name)}
              >
                <span className='fs-1'>+</span>
              </button>
            )}
          </div>
        
          {Array.isArray(formData?.[field.name]) && formData[field.name].slice(1).map((file:fileType, index:number) => (
            <div key={file.id || index} className="multiple-upload gap-2">
              <aside>
                <div className="fileUpload fileUpload--preview fileUpload--loader">
                  <input
                    type="file"
                    className="uploadBtn upload"
                    name={field.name}
                    onChange={(e) => handleChange(e, file.id)}
                  />
                  {file?.fileName && (
                    <button
                      type="button"
                      onClick={() => handleRemoveFileArray(field.name, file.id)}
                      className='uploadBtn'
                    >
                      <i className="fa fa-times">X</i>
                    </button>
                  )}
        
                  <input
                    className="uploadFile path"
                    placeholder="Choose file"
                    value={file?.fileName || ''}
                    readOnly
                  />
                  <span>Upload</span>
                </div>
                <span className="upload-error">Accepted Formats (.pdf/.xlsx/.png/.jpeg)</span>
              </aside>
            </div>
          ))}
        </>
        
        );
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
          <span className="number-line">0{formArray.id}</span>

          <aside>
            <h3>{formArray.title}</h3>
            <p className="content-opacity">
              A sub-heading is a mini-headline given to a
              subsection or paragraph within a main piece of
              writing. They're smaller than the main headline but
              larger than the paragraph text of the article.
            </p>


            <form className="form-wrapper" onSubmit={(e) => { e.preventDefault(); handelNext() }}>
              <div className="row ">

                {formArray?.fields.map((field, index) => (
                  (!field?.refKey || field?.refKey === formData?.purpose ? (
                    <div key={index} className={`mt-3 col-12 ${field.types === 'textarea' ? 'col-xl-12' : 'col-md-6'} justify-content-between`}>
                      <label htmlFor="">
                        {field.label}
                      </label>
                      {!field.isRequired&&(
                         <span className='text-danger'>*</span>
                      )}
                     
                      {renderField(field)}
                      <div className="validation-wrapper">
                        <p >{errors[field.name]}</p>
                      </div>
                    </div>
                  ):null)

                ))}
              </div>
              <div className="btn-pagination">
                <button type='submit' className="btn btn-primary">Next</button>
              </div>
            </form>

          </aside>


        </div>
        <div className="col-12 col-md-3 section-wrapper-box">
          <div className="information-box">
            <img src="images/icons/information-icon.svg" />
            <h4>General information</h4>
            <p>This form in only Applicable for Qatar Airways Staffs. You will be asked to provide proof to verify it.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormComponent