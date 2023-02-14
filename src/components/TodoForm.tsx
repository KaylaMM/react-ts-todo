import { ChangeEvent, useState } from "react";
import { TodoType } from "./types";

interface TodoFormProps {
  onSubmit: (todo: TodoType) => void;
}

const TodoForm = ({ onSubmit }: TodoFormProps) => {
  const [taskInput, setTaskInput] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskInput(event.target.value);
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("target", event.target.value);
    onSubmit({ id: 1, text: taskInput });
    setTaskInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        placeholder="Add a task"
        onChange={handleChange}
        value={taskInput}
      ></input>
      <button type="submit">Save</button>
    </form>
  );
};

export default TodoForm;
