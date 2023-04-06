import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../app/todoslice'
import List from "./list"
export default function Todos() {

  const [value,setValue] =useState({
    id: new Date().toString() ,
    name: ""
  })
const dispatch = useDispatch() 
const onSubmit = (event) => {
  event.preventDefault();
  if (value.name !== "") {
    dispatch(addTodo(value))
  }

setValue({
  id:new Date().toString(),
  name: ""
})
}
   return ( 
    <div className='main'>
   <form onSubmit = {onSubmit} className='form'>
          <input  value = {value.name} onChange = {(event) => setValue({...value,name:event.target.value})} />
          <button>
            add 
          </button>
   </form>
   <List editText = {value.name} />
   </div>
 )
   }
