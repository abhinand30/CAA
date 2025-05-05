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
    // addForm(state, action) {
    
    //   state.forms.push(action.payload)
    //  },
    // clearFrom(state){
    //   state.forms=[]
    // },
    add_field(state,action){
        state.forms.title={...state.forms,action.payload.name=action.payload.value}
    }
    update_field(state,action){
      setFormData((prevState) => {
        const updatedFile = Array.isArray(prevState[name]) ? [...prevState[name]] : [{ id: 0, fileName: '' }]
        updatedFile[index] = { fileName: files?.[0].name, id: index }
        return { ...prevState, [name]: updatedFile }
      })
    } else {
      setFormData((prevState) => ({
        ...prevState, [name]: value
      }))
    }
    }
  },
  
})

export const { addForm,clearFrom } = formSlice.actions;
export const storedFormData=(state:{forms:formState})=>state.forms.forms;
export default formSlice.reducer