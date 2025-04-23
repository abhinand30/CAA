import { createSlice } from '@reduxjs/toolkit'
import { FormType } from '../../common/types/types'

interface formState{
    forms:FormType[]
}
const initialState:formState={
    forms:[]
}
const formSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    addForm(state, action) {
      state.forms.push(action.payload)
    },
  },
})

export const { addForm } = formSlice.actions;

export default formSlice.reducer