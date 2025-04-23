interface fieldsTypes{
    name: string;
    types: string;
    label: string;
    options?:string[];
    multiple?:boolean;
    refKey?:string;
}
interface FormType {
    [key: string]: string;
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
export type{fieldsTypes,FormType,tabTypes,tabProps}