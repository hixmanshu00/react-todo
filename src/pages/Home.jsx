import React, { useEffect } from 'react'
import { useTodoContext } from '../context/TodoContext'
import { Link } from 'react-router-dom'
import Task from '../components/Task'
import Sidebar from '../components/Sidebar'
import { IoAddCircleOutline } from "react-icons/io5";

const Home = () => {
    const todo = useTodoContext()
    let tasks = todo.todos

    const sortTasks = (a, b) => {
        if (a.isCompleted === b.isCompleted) {
          // If tasks have the same completion status, sort by priority
          const priorityOrder = {
            High: 1,
            Medium: 2,
            Low: 3,
          };
    
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        }
    
        // Otherwise, sort by completion status
        return a.isCompleted ? 1 : -1;
      };
    const sortedTasks = [...tasks].sort(sortTasks)

    
  return (
    <div className='w-full h-[100vh] flex flex-col lg:flex-row justify-center p-8 bg-primary text-tertiary items-center'>
        <div className='w-full lg:w-[900px] p-6 bg-white rounded-lg shadow-md'>

      <div className='flex justify-between lg:justify-center items-center mb-2'>
        <h1 className='text-center text-6xl font-semibold uppercase'>to do</h1>
        <Link to='/addTask' className='lg:hidden'>
            <IoAddCircleOutline size={40} />
        </Link>
      </div>
      <div>
        {tasks.length > 0 ? <>
            {
                sortedTasks.map((task) => (
                    <Task task={task} key={task.id}/>
                ))
            }
        </>: <><h1>No Tasks addded</h1></>}
      </div>
    </div>
    <div className='lg:block hidden ml-[-10px] bg-accent text-white rounded-xl'>
    <Sidebar />
    </div>
        </div>
  )
}

export default Home
