"use client"
import TaskList from './TaskList';
import styles from './styles/todo.module.css';
import { FiPlus } from 'react-icons/fi';
import { FaMagnifyingGlass, FaTrash, FaCheck } from "react-icons/fa6";
import { useState } from "react";
export default function Todo() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState<string[]>([]); // Provide initial value as an empty array
  const handleTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  }
  const handlet = () => {
    if(task !== "") setTaskList([...taskList, task]);
    else alert("Please enter a valid todo");
    setTask('');
  }
  return (
    <div className = {styles.todoContainer}>
      <h2 className = {styles.heading}>PERSONAL TODO APP</h2>
      <div className = {styles.inputTaskContainer}>
        <input type="text" placeholder='Add Todo' className = {styles.inputContainer} value = {task} onChange  = {(e) => handleTask(e)}/>
        <button className = {styles.addTaskBtn} onClick={handlet}><FiPlus className = {styles.addIcon} /></button>
      </div>
      <div className = {styles.operations}>
        <div className = {styles.operations1}>
          <select name="taskStatus" id="taskStatus" className = {styles.selectTask}>
             <option value="default">Default</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
          <button className = {styles.completedBtn}>Mark All Completed</button>
        </div>
        <div className = {styles.operations2}>
          <input type="text" placeholder = "Search Todo" className = {styles.searchInputContainer}/>
          <button className = {styles.searchTaskBtn}><FaMagnifyingGlass className = {styles.searchIcon} /></button>
        </div>
      </div>
      <TaskList taskList = {taskList} />
    </div>
  )
}