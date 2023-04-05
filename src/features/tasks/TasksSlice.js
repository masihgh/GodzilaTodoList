import { createSlice } from '@reduxjs/toolkit'

export const TasksSlice = createSlice({
  name: 'skills',
  initialState: {
    value: [],
  },
  reducers: {
    remove: (state,action) => {
        state.value = state.value.filter(t => t !== action.payload)
    },
    incrementByAmount: (state, action) => {
      state.value = [...state.value,action.payload]
    },
  },
})

export const { incrementByAmount, remove} = TasksSlice.actions



// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.skills.value)`
export const selectCount = (state) => state.skills.value

export default TasksSlice.reducer
