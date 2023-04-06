import {
  useState,
  useEffect,
  useRef,
} from "react";
import { TodoType } from "./types";

interface TodoFormProps {
  onSubmit: (
    todo: TodoType
  ) => void;
  edit?: TodoType;
  todos?: Array<TodoType>;
}

const TodoForm = ({
  edit,
  onSubmit,
  todos,
}: TodoFormProps) => {
  const [
    taskInput,
    setTaskInput,
  ] = useState("");

  const inputRef =
    useRef<any>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  const handleChange = (
    event: any
  ) => {
    setTaskInput(
      event.target.value
    );
  };

  const handleSubmit = (
    event: any
  ) => {
    event.preventDefault();
    console.log(
      "target",
      event.target.value
    );
    onSubmit({
      id: todos?.length
        ? todos.length + 1
        : 1,
      text: taskInput,
    });
    setTaskInput("");
  };

  const handleEdit = (
    event: any
  ) => {
    event.preventDefault();
    console.log(
      "target",
      event.target.value
    );
    onSubmit({
      id: 1,
      text: taskInput,
    });
    setTaskInput("");
  };

  return (
    <form
      className="todo-form"
      onSubmit={handleSubmit}
    >
      {edit ? (
        <>
          <input
            placeholder="Update your item"
            value={taskInput}
            name="text"
            className="todo-input edit"
            onChange={
              handleChange
            }
            ref={inputRef}
          />
          <button
            onClick={
              handleEdit
            }
            className="todo-button edit"
          >
            Save Changes
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a todo"
            value={taskInput}
            name="text"
            className="todo-input"
            onChange={
              handleChange
            }
            ref={inputRef}
          />
          <button
            onClick={
              handleSubmit
            }
            className="todo-button"
          >
            Add todo
          </button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
