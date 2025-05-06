interface fieldsTypes{
    name: string;
    types: string;
    label: string;
    options?:string[];
    multiple?:boolean;
    refKey?:string;
}
interface FormType {
    [key: string]:any;
}
interface FormsProps{
    title: string;
    [key: string]:any
    []

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
    formData:FormType;
    // setFormData:React.Dispatch<React.SetStateAction<FormType>>;
    setErrors:React.Dispatch<React.SetStateAction<FormType>>;
    errors:FormType;
    title:string
}

interface validationProps{
//     currentForm:{id: number; 
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
setErrors?:React.Dispatch<React.SetStateAction<FormType>>;
storedData:FormType;
}

export type{FormsProps,fieldsTypes,FormType,tabTypes,tabProps,FormComponentProps,validationProps}