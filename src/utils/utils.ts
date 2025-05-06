
import { FormType, validationProps } from "../common/types/types";
import { formArray } from "../common/data/dataArray";



export const checkValidation = (props:validationProps): boolean => {
    const {setErrors,title,storedData}=props;
    
    const formData=storedData?.formData
    const currentForm=formArray[title]

    const newError: FormType = {};
  
    currentForm.fields.forEach((field) => {
      const fieldValue = formData[field.name];
  
      const containsValues = Array.isArray(fieldValue)
        ? fieldValue.some(item => item.fileName?.trim() !== '')
        : fieldValue?.trim() ?? '';
  
      if (!containsValues) {
        if (!field.refKey || field.refKey === formData?.purpose) {
          newError[field.name] = `${field.label} is required`;
        }
      }
  
      if (Array.isArray(fieldValue) && fieldValue.some(item => item.fileName?.trim() === '')) {
        newError[field.name] = `${field.label} is required`;
      }
    });

  if(setErrors){
    setErrors(newError);
  }
    return Object.keys(newError).length === 0;
  };

  export const findFormData=(props)=>{
    const {savedData,title}=props;
     const formData=savedData.find(data => data.title === title)
    return formData||null
  }