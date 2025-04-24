import { createSlice } from '@reduxjs/toolkit'
import { FormsProps } from '../../common/types/types'

interface formState{
    forms:FormsProps[]
}
const initialState:formState={
    forms:[]
}
const formSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    addForm(state, action) {
      console.log(action.payload)
      state.forms.push(action.payload)
    },
    clearFrom(state){
      state.forms=[]
    }
  },
  
})

export const { addForm,clearFrom } = formSlice.actions;
export const storedFormData=(state:{forms:formState})=>state.forms.forms;
export default formSlice.reducer