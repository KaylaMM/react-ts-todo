import { useState } from "react";
import TodoForm from "./TodoForm";
import ToDo from "./ToDo";
import { TodoType } from "./types";


function TodoList() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  console.log("TODOS", todos);

  const addTodo = (todo: TodoType) => {
    setTodos((prevState) => [...prevState, todo]);
  };

  const editTodo = (todoId: number, updatedTodo: TodoType) => {
    if(!updatedTodo.text){
      return
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? updatedTodo : item)))
  }

  const deleteTodo = (id: TodoType) => {
    const removeArr = [...todos].filter(todo => todo.id !== id)

    setTodos(removeArr)
}

  return (
    <div>
      <h1>What's the plan for today?</h1>
      <TodoForm onSubmit={addTodo} />
      <div>
        {todos.map((todo) => (
          <ToDo todo={todo} editTodo={editTodo} deleteTodo={deleteTodo} /> 
        ))}
      </div>
    </div>
  );
}

export default TodoList;
