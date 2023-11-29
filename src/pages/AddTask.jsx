import React, { useState } from "react";
import { useTodoContext } from "../context/TodoContext";
import { v4 as uuidv4 } from "uuid";
import { Link, useNavigate } from "react-router-dom";

const AddTask = () => {
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const [priority, setPriority] = useState("High");
  const todo = useTodoContext();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    const Task = {
      id: uuidv4(),
      task,
      desc,
      priority,
      addedAt: date.toLocaleString(),
    };
    todo.addTodo(Task);
    setTask("");
    setDesc("");
    navigate('/')
  };

  return (
    <div className="w-full h-[100vh] flex  justify-center p-8 bg-primary text-tertiary items-center">
        <div className='w-full lg:w-[800px] p-6 lg:p-10 bg-white rounded-lg shadow-md'>
        <h1 className="text-center font-semibold text-4xl">Add Task</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1 my-4">
              <label
                htmlFor="todo"
                className="uppercase font-semibold text-base"
              >
                task
              </label>
              <input
                onChange={(e) => setTask(e.target.value)}
                type="text"
                className="border-2 p-2"
                name="todo"
                required
                value={task}
              />
            </div>
            <div className="flex flex-col gap-1 my-4">
              <label
                htmlFor="desc"
                className="uppercase font-semibold text-base"
              >
                task description
              </label>
              <textarea
                onChange={(e) => setDesc(e.target.value)}
                name="desc"
                cols="30"
                rows="2"
                className="border-2 p-2"
                value={desc}
              ></textarea>
            </div>

            <div className="flex flex-col gap-1 my-4">
              <label
                htmlFor="priority"
                className="uppercase font-semibold text-base"
              >
                Priority
              </label>
              <select
                name="priority"
                onChange={(e) => setPriority(e.target.value)}
                value={priority}
                className="border-2 p-2"
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
            <div className="flex justify-between">
              <Link to="/">
                <button
                  type="submit"
                  className="px-4 bg-tertiary text-white rounded-md py-2  uppercase"
                >
                  Go Back
                </button>
              </Link>

              <button
                type="submit"
                className="px-4 bg-accent text-white rounded-md py-2  uppercase"
              >
                Add task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
