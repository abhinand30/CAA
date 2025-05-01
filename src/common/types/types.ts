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
        tab: string; 
    fields:fieldsTypes[];
    };
    handelNext:() => void;
    formData:FormType;
    setFormData:React.Dispatch<React.SetStateAction<FormType>>;
    setErrors:React.Dispatch<React.SetStateAction<FormType>>;
    errors:FormType
}
export type{FormsProps,fieldsTypes,FormType,tabTypes,tabProps,FormComponentProps}