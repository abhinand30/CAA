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
    // {
    //     lastModified?:string;
    //     lastModifiedDate?:Date;
    //     name:string;
    //     size:number;
    //     type:string;}[];
}
interface FormsProps{
    [title: string];
    [key: string]:any;

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
    setFormData:React.Dispatch<React.SetStateAction<FormType>>;
    setErrors:React.Dispatch<React.SetStateAction<FormType>>;
    errors:FormType
}
interface validationProps{
    currentForm:{id: number;
    title: string;
    fields: {
        name: string;
        types: string;
        options: string[];
        label: string;
        key: string;
        refKey?: string|undefined;
        multiple?: boolean|undefined;
        isRequired?: boolean|undefined;
    }[]
}
setErrors:React.Dispatch<React.SetStateAction<FormType>>;
formData:FormType;
}

export type{FormsProps,fieldsTypes,FormType,tabTypes,tabProps,FormComponentProps,validationProps}