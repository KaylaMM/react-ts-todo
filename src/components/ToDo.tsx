import { useState } from "react";
import { TodoType } from "./types";
import  TodoForm from "./TodoForm"
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

interface TodoProps {
  todo: TodoType;
  editTodo: (todoId: number, updatedTodo: TodoType, deleteTodo: TodoType) => void
}

function Todo({todo, editTodo}: TodoProps) {

const [edit, setEdit] = useState<TodoType>({
  id: null,
  text: ''
})

const submitUpdate = (value: TodoType) => {
  editTodo(edit.id as number, value)
  setEdit({
      id: null,
      text: ''
  }) 
}

if(edit.id){
  return <TodoForm edit={edit} onSubmit={submitUpdate}/>
}

  return (
    <div className='todo-row'>
      <span>{todo.text}</span>
      <RiCloseCircleLine onClick={() => deleteTodo(todo.id)} className='delete-icon'/>
      <TiEdit onClick={() => setEdit({id: todo.id, text: todo.text})} className='edit-icon'/>
    </div>
  );
}
export default Todo;
