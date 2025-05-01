import { createSlice } from '@reduxjs/toolkit';

import { FormsProps } from '../../common/types/types'

interface formState{
    forms:FormsProps[];
}
const initialState:formState={
    forms:[]
}
const formSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    addForm(state, action) {
     const ifExists=state.forms.findIndex((form)=>form.title===action.payload.title)
     if(ifExists===-1){
      state.forms.push(action.payload)
     }
    },
    clearFrom(state){
      state.forms=[]
    },
  },
  
})

export const { addForm,clearFrom } = formSlice.actions;
export const storedFormData=(state:{forms:formState})=>state.forms.forms;
export default formSlice.reducer