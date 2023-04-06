import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
name:"todoList",
initialState:[],
reducers:{
   addTodo: (state,action) => {
     state.push(action.payload)
   },
   deleteTodo: (state,action) => {
      return state.filter(elem => elem.id !== action.payload ) 
      
   },
   deleteAll: (state,action) => {
      return state = []
   },
   editTodo: (state,action) => {
      const index = state.findIndex(todo => todo.id === action.payload.id);
      state[index].name = action.payload.name;
   }

}

}) 
export const {addTodo,deleteTodo,deleteAll,editTodo} = todoSlice.actions
export default todoSlice.reducer