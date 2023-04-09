import { createSlice } from '@reduxjs/toolkit'


export const TasksSlice = createSlice({
  name: 'tasks',
  
  initialState: {
    tasks: []
  },

  reducers: {
    addTasks: (state, action) => {
      state.tasks = action.payload;
      return state;
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      return state;
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(item => item._id !== action.payload)
      return state;
    },
    completeTask: (state, action) => {
      state.tasks = state.tasks.map((todo) => {
        if (todo._id === action.payload._id) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
        return todo;
      });
      return state
    },
    editTask: (state, action) => {
      state.tasks = state.tasks.map((todo) => {
        if (todo._id === action.payload._id) {
          return {
            ...action.payload
          };
        }
        return todo;
      });
      return state
    },

  },
})

export const { addTasks,addTask,removeTask,completeTask,editTask } = TasksSlice.actions;



// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.skills.value)`
export const TaskList = (state) => state.tasks.tasks

export default TasksSlice.reducer
