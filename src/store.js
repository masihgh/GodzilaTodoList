import { configureStore } from '@reduxjs/toolkit'
import skillsReducer from './features/members/skillsSlice'
import tasksReducer from './features/home/TasksSlice'
import membersReducer from './features/members/membersSlice'

export default configureStore({
  reducer: {
    skills: skillsReducer,
    tasks: tasksReducer,
    members: membersReducer
},
})