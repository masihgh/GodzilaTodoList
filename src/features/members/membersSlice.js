import { createSlice } from '@reduxjs/toolkit'


export const MembersSlice = createSlice({
  name: 'members',
  
  initialState: {
    members: []
  },

  reducers: {
    addMembers: (state, action) => {
      state.members = action.payload;
      return state;
    },
    addMember: (state, action) => {
      state.members.push(action.payload);
      return state;
    },
    removeMember: (state, action) => {
      state.members = state.members.filter(item => item._id !== action.payload)
      return state;
    },
    searchMember: (state, action) => {
      // if(action.payload !== ""){
      //   // alert('Fixed')
      //   state.members = state.members.filter(member => member.name.includes(action.payload))
      // }
      return state
    }
  },
})

export const { addMembers,addMember,removeMember,searchMember } = MembersSlice.actions;



// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.skills.value)`
export const MemberList = (state) => state.members.members

export default MembersSlice.reducer