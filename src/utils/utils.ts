import { FormType, validationProps } from "../common/types/types";



export const checkValidation = (props:validationProps): boolean => {
    const {currentForm,formData,setErrors}=props;
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
  
    setErrors(newError);
    return Object.keys(newError).length === 0;
  };