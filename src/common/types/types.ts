interface fieldsTypes{
    name: string;
    types: string;
    label: string;
    options?:string[];
    multiple?:boolean;
    refKey?:string;
    isNotRequired?:boolean;
}
interface FormType {
    
    [key: string]:{ [key: string]: string | { id: number; fileName: string; }[]; }
}
interface FormsProps{
    title: string;
    [key: string]:any
}
interface tabTypes{
    fields:fieldsTypes[];

}
interface tabProps{
    tab:{
        id: number;
        tab: string;
    }
    selectTab:number;
    onClick:(id: number) => void;
}

interface FormComponentProps{
    formArray: {
        id: number; 
        title: string; 
    fields:fieldsTypes[];

    };
    handelNext:() => void;
    formData:any;
    // setFormData:React.Dispatch<React.SetStateAction<FormType>>;
    setErrors:React.Dispatch<React.SetStateAction<errorType>>;
    errors:errorType;
    title:string;
}

interface errorType{
    [key:string]:string
}
interface validationProps{
//     currentForm:{id: number
//     fields: {
//         name: string;
//         types: string;
//         options: string[];
//         label: string;
//         key: string;
//         refKey?: string|undefined;
//         multiple?: boolean|undefined;
//         isRequired?: boolean|undefined;
//     }[]
// }
title: string;
setErrors?:React.Dispatch<React.SetStateAction<errorType>>;
storedData:{ title: string; formData: { [key: string]: string | { id: number; fileName: string; }[]; }; } | undefined
}

interface formTabProps{
    handleTab:(event: React.MouseEvent<HTMLButtonElement>, tabKey: string) => void;
    tabKey?:string;
}
interface fileType{
    id:number;
    fileName:string;
}
interface findFormDataProps{
    title: string;
    savedData:{ title: string; formData: { [key: string]: string | { id: number; fileName: string; }[]; }; }[]|undefined;
}
export type{FormsProps,fieldsTypes,FormType,tabTypes,tabProps,FormComponentProps,validationProps,formTabProps,errorType,fileType,findFormDataProps}


// import { useSelector } from 'react-redux';
// import { formArray } from '../common/data/dataArray';
// import { storedFormData } from '../redux/slice/formSlice';
// import { checkValidation, findFormData } from '../utils/utils';

// type FormKeys = keyof typeof formArray;

// const TabWizard = () => {
//   const storedData = useSelector(storedFormData);

//   const handleTabClick = (event: React.MouseEvent<HTMLButtonElement>, tabKey: string) => {
//     const storedDataForTab = findFormData({ savedData: storedData, title: tabKey });

//     const isValid = checkValidation({
//       storedData: storedDataForTab,
//       title: tabKey
//     });

//     if (!isValid) {
//       event.preventDefault(); // Prevent tab switch if validation fails
//       alert("Validation failed! Please complete required fields before proceeding.");
//     }
//   };

//   return (
//     <div className="content-area__head-block">
//       <div className="content-area__head-block__wrapper">
//         <div className="nav-scroller">
//           <ul className="nav nav-tabs nav-pills nav-fill form-wizard">
//             {Object.keys(formArray).map((key) => (
//               <li key={formArray[key as FormKeys].id} className="nav-item nav-fill">
//                 <button
//                   className="nav-link"
//                   data-bs-toggle="tab"
//                   data-bs-target={`#${key}`}
//                   role="tab"
//                   aria-controls={key}
//                   aria-selected="false"
//                   onClick={(event) => handleTabClick(event, key)} // Validate before switching
//                 >
//                   <span className="form-wizard__completed" />
//                   <span className="form-wizard__no">0{formArray[key as FormKeys].id}</span>
//                   {formArray[key as FormKeys].title}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TabWizard;
