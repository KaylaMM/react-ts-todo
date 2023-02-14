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

  return (
    <div>
      <h1>What's the plan for today?</h1>
      <TodoForm onSubmit={addTodo} />
      <div>
        {todos.map((todo) => (
          <ToDo todo={todo} /> 
        ))}
      </div>
    </div>
  );
}

export default TodoList;
