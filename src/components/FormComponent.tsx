import React from 'react';

import { fieldsTypes, FormComponentProps } from '../common/types/types';
import { addForm } from '../redux/slice/formSlice';



const FormComponent: React.FC<FormComponentProps> = (props) => {
    const {  formArray,handelNext, setErrors, errors } = props;
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,index:number) => {
        const { name, value, type, files, } = e.target;
        if (name === 'purpose') {
            addForm({})
        }
        if (type === 'file' && files[0]) {
            console.log(formData?.name)
            addForm((prevState) => {
                const updatedFile=Array.isArray(prevState[name])?[...prevState[name]]: [{id:0,fileName:''}]
                updatedFile[index]={fileName:files?.[0].name, id: index }
                return{...prevState,[name]:updatedFile}
            })
        } else {
            addForm((prevState) => ({
                ...prevState, [name]: value
            }))
        }
        setErrors((prevState) => ({
            ...prevState, [name]: ''
        }))
        
    }
  
   
   const handleAddFileArray = (fieldName: string) => {
    addForm((prevState) => {
        const FileArray = Array.isArray(prevState[fieldName]) ? [...prevState[fieldName]] : [];
        const newEntry = { id: FileArray.length, fileName: "" };
        return {
            ...prevState,
            [fieldName]: [...FileArray, newEntry],
        };
    });
};

const handleRemoveFileArray=(fieldName:string,id:number)=>{
    addForm((prevState)=>{
        const updatedData=prevState[fieldName].filter((file)=>file?.id!==id)
        // console.log(updatedData)
        return{
            ...prevState,[fieldName]:updatedData
        }
    })

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
  <div className='multiple-upload'>
    <aside>
      <div className="fileUpload">
        <input 
          type="file" 
          className="uploadBtn upload" 
          name={field.name} 
          onChange={(e) => handleChange(e, 0)} 
        />
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
      onClick={() => handleAddFileArray(field.name)}
    >
      <span className='fs-1'>+</span>
    </button>
  )}
</div>

{Array.isArray(formData?.[field.name]) && formData[field.name].map((file, index) => (
  <div key={index} className="multiple-upload gap-2">
    <aside>
      <div className="fileUpload">
        <input 
          type="file" 
          className="uploadBtn upload" 
          name={field.name} 
          onChange={(e) => handleChange(e, file.id)} 
        />
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
    <button 
      type="button" 
      className="p-3 rounded-5" 
      onClick={() => handleRemoveFileArray(field.name, file.id)}
    >
      Delete
    </button>
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
                        <h3>{formArray.tab}</h3>
                        <p className="content-opacity">
                            A sub-heading is a mini-headline given to a
                            subsection or paragraph within a main piece of
                            writing. They're smaller than the main headline but
                            larger than the paragraph text of the article.
                        </p>

                        <form className="form-wrapper" onSubmit={(e) => { e.preventDefault(); handelNext() }}>
                            <div className="row">

                                {formArray?.fields.map((field, index) => (
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