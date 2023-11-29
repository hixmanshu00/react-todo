import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {

  const [todos, setTodos] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });



  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todos));
}, [todos]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const toggleTodo = (id, state) => {
    const index = todos.findIndex((todo) => todo.id == id);
    if (index !== -1) {
      const updatedTodos = [...todos];
      updatedTodos[index].isCompleted = state;
      setTodos(updatedTodos);
    }
  };

  const editTodo = (newTodo) => {
    const index = todos.findIndex((todo) => todo.id == newTodo.id);
    if (index !== -1) {
      const updatedTodos = [...todos];
      updatedTodos[index] = newTodo;
      setTodos(updatedTodos);
    }
  };

  const deleteTodo = (id) => {
    const tasks = todos.filter((todo) => todo.id !== id);
    setTodos(tasks);
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, toggleTodo, deleteTodo, editTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(TodoContext);
};
