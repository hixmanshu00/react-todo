import React from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useTodoContext } from "../context/TodoContext";
import { Link } from "react-router-dom";

const Task = ({ task }) => {
  const Todo = useTodoContext();
  const handleChange = () => {
    Todo.toggleTodo(task.id, !task.isCompleted);
  };

  return (
    <div className="flex justify-between py-4 px-4 shadow">
      <div>
        <h1
          className={
            task.isCompleted
              ? "italic line-through transition-all ease-in-out "
              : "font-semibold"
          }
        >
          {task.task}
        </h1>
        <p className="text-sm">{task.desc}</p>
      </div>
      <div className="flex gap-1 md:flex-row md:gap-4 flex-col-reverse justify-center items-center">
        <p className={`cursor-pointer text-priority${task.priority}`}>{task.priority}</p>
        <div className="flex gap-2 items-center">

        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={handleChange}
          className="w-4 h-4 form-checkbox text-primary border-primary focus:ring-primary"
        />
        <MdDelete
          size={24}
          onClick={() => Todo.deleteTodo(task.id)}
          className="text-accent"
        />
        <Link to={`/editTask/${task.id}`}>
          <FaEdit size={24} />
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Task;
