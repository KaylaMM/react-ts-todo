import { useState } from "react";
import TodoForm from "./TodoForm";
import ToDo from "./ToDo";
import { TodoType } from "./types";

function TodoList() {
  const [todos, setTodos] =
    useState<TodoType[]>([]);
  console.log("TODOS", todos);

  const addTodo = (
    todo: TodoType
  ) => {
    setTodos((prevState) => [
      ...prevState,
      todo,
    ]);
  };

  const editTodo = (
    todoId: TodoType["id"],
    updatedTodo: TodoType
  ) => {
    if (!updatedTodo.text) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) =>
        item.id === todoId
          ? updatedTodo
          : item
      )
    );
  };

  const deleteTodo = (
    id: TodoType["id"]
  ) => {
    console.log({ todos });
    const removeArr = [
      ...todos,
    ].filter(
      (todo) => todo.id !== id
    );
    console.log({
      removeArr,
    });

    setTodos(removeArr);
  };

  return (
    <div>
      <h1>
        What's the plan for
        today?
      </h1>
      <TodoForm
        todos={todos}
        onSubmit={addTodo}
      />
      <div>
        {todos.map((todo) => (
          <ToDo
            todo={todo}
            editTodo={
              editTodo
            }
            deleteTodo={
              deleteTodo
            }
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
