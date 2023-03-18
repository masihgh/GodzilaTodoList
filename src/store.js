import { configureStore } from '@reduxjs/toolkit'
import skillsReducer from './features/members/skillsSlice'

export default configureStore({
  reducer: {
    skills: skillsReducer,  
},
})