// import { useState } from "react";
import { TodoType } from "./types";
// import {RiCloseCircleLine} from 'react-icons/ri'
// import {TiEdit} from 'react-icons/ti'

interface TodoProps {
    todo: TodoType
}

function Todo({ todo }: TodoProps) {
  return (
    <div>
      <span>{todo.text}</span>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}
export default Todo;
