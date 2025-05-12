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

interface FormComponentProps{
    formArray: {
        id: number; 
        title: string; 
    fields:fieldsTypes[];

    };
    handelNext:() => void;
    formData:any;
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
storedData:{ title: string; formData: { [key: string]: string | { id: number; fileName: string; }[]; }; }|undefined
}

interface fileType{
    id:number;
    fileName:string;
}
interface findFormDataProps{
    title: string;
    savedData:{ title: string; formData: { [key: string]: string | { id: number; fileName: string; }[]; }; }[]|undefined;
}
export type{fieldsTypes,FormType,FormComponentProps,validationProps,errorType,fileType,findFormDataProps}
