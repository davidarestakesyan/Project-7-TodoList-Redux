import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo,deleteAll,editTodo } from '../app/todoslice';
export default function List({editText}) {
   const dispatch = useDispatch()
   const todo = useSelector((state) => state.todoList) 
   console.log(todo);
  return (
    <>
      { todo.length > 0  &&  <button onClick={() => dispatch(deleteAll())} className='button'> Delete All  </button> }
     <ol type = "none"> 
   {todo.map((elem) => {
     return <div  key = {elem.id} className='todoDiv'>
              <li>{elem.name}</li>
               <button onClick={() => dispatch(deleteTodo(elem.id))}>delete</button>
             <button onClick={() => dispatch(editTodo({id:elem.id,name:editText}))}>edit</button>
            </div> 
      })}
      </ol> 
    </>
  )
}
