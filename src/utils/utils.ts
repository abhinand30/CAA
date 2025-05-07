
import { errorType, findFormDataProps, validationProps } from "../common/types/types";
import { formArray } from "../common/data/dataArray";


// type FormKeys = keyof typeof formArray;
export const checkValidation = (props:validationProps): boolean => {
    const {setErrors,title,storedData}=props;

    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const formData=storedData?.formData
    const currentForm=formArray[title]

    const newError: errorType = {};
  
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
      if(field.name==='email'&&!fieldValue.match(isValidEmail)){
        newError[field.name] = `${field.label} is not valid`;
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

  export const findFormData=(props:findFormDataProps)=>{
    const {savedData,title}=props;
     const formData=savedData.find(data => data.title === title)
    return formData||null
  }