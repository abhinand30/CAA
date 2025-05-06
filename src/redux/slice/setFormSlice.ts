import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface formState{
  forms:{
    title:string;
    formData: { [key: string]: string|{id:number;fileName:string}[] };
  }[]
}

const initialState:formState={
  forms:[{title:'appInfo',formData:{}}]
}

const formSlice=createSlice({
  name:'forms',
  initialState,
  reducers:{
    updateField(state,action:PayloadAction<{title:string;name:string;value: string;index?: number;}>){
      const {title,name,value,index}=action.payload;
      const form=state.forms.find(f=>f.title===title)
      if(form){
        if(index){
          const fileArray=Array.isArray(form?.formData[name])?
          [...form.formData[name]]:
          [{ id: 0, fileName: '' }]
          fileArray[index]=value;
          form.formData[name]=fileArray;
        }else{
          form.formData[name]=value
        }
      }
     
    },
    addFileArray(state,action:PayloadAction<{title:string;name:string;}>){
      const {title,name}=action.payload;
      const form=state.forms.find(f=>f.title===title)
      if(form){
        const fileArray=Array.isArray(form?.formData[name])?
          [...form.formData[name]]:
          []
         fileArray.push({id:form.formData[name].length,fileName:''})
      }
    },
    deleteFileArray(state,action:PayloadAction<{title:string;name:string;index:number}>){
      const {title,name,index}=action.payload;
      const form=state.forms.find(f=>f.title===title)
      if(form &&Array.isArray(form.formData[name])){
        form.formData[name]=  form.formData[name].filter(f=>f.id!==index)
      }
    }
  }
});

