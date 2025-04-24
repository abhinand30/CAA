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
    [naem: string]:{[key: string]:any}

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
    handelNext:() => void
}
export type{FormsProps,fieldsTypes,FormType,tabTypes,tabProps}