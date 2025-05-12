
import { errorType, fieldsTypes, findFormDataProps, validationProps } from "../common/types/types";
import { formArray } from "../common/data/dataArray";

type FormKeys = keyof typeof formArray;

export const checkValidation = (props: validationProps): boolean => {
  const { setErrors, title, storedData } = props;

  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const formData = storedData?.formData
  const currentForm = formArray[title as FormKeys]
  
  let newError: errorType = {};
  let checkValueInAddInfo=false;

  currentForm.fields.forEach((field: fieldsTypes) => {
    
    const fieldValue = formData?formData[field.name]:undefined;

    if (title === 'addInfo') {
      const containsValue = Array.isArray(fieldValue)
          ? fieldValue.length > 0 && fieldValue.some(item => item.fileName?.trim() !== '')
          : fieldValue?.trim() ?? '';
  
      if (!containsValue) {
        newError[field.name] ='';
      }else{
        checkValueInAddInfo=true
      }
  }else {

    const containsValues = Array.isArray(fieldValue)
    ? fieldValue.some(item => item.fileName?.trim() !== '')
    : fieldValue?.trim() ?? '';
      if (!containsValues && !field.isNotRequired) {
        if (!field.refKey || field.refKey === formData?.purpose) {
          newError[field.name] = `${field.label} is required`;
        }
      }
      if (field.name === 'email' && typeof fieldValue === 'string' && !fieldValue.match(isValidEmail)) {
        newError[field.name] = `${field.label} is not valid`;
      }
      if (field.name === 'phone' && fieldValue?.length!>10) {
        newError[field.name] = `${field.label} is not valid`;
      }

      if (Array.isArray(fieldValue) && fieldValue.some(item => item.fileName?.trim() === '')) {
        newError[field.name] = `${field.label} is required`;
      }
      if (setErrors) {
        setErrors(newError);
      }
    }
   
  });
 
  if(checkValueInAddInfo&&title==='addInfo'){
    console.log(checkValueInAddInfo,title)
    newError = {};
  }
  return Object.keys(newError).length === 0;
};


export const findFormData = (props:findFormDataProps) => {
  const { savedData, title } = props;
  const formData = savedData.find(data => data.title === title)
  return formData || null
}


