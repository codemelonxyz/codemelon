"use client"
import TaskList from './TaskList';
import styles from './styles/todo.module.css';
import { FiPlus } from 'react-icons/fi';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useEffect, useState } from "react";
export default function Todo() {
  const [isDark, setIsDark] = useState(false);
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState(() =>  {
    if(typeof window !== 'undefined') {
      const savedTasks = localStorage.getItem('tasks');
      if(savedTasks) return JSON.parse(savedTasks);
    }
    return [];
  });
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskList));
  }, [taskList]);

  const handleTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  }
  const handlet = () => {
    if(task !== "") setTaskList([...taskList, task]);
    else alert("Please enter a valid todo");
    setTask('');
  }

  function toggleTheme() {
    setIsDark(!isDark);
  }
  return (
    <div className = {isDark ? `${styles.todoContainer} ${styles.dark}` : `${styles.todoContainer}`}>
      <button onClick = {toggleTheme}>Toggle Theme</button>
      <h2 className = {styles.heading}>PERSONAL TODO APP</h2>
      <div className = {styles.inputTaskContainer}>
        <input type="text" placeholder='Add Todo' className = {isDark ? `${styles.inputContainer} ${styles.darkInput}` : `${styles.inputContainer}`}value = {task} onChange  = {(e) => handleTask(e)}/>
        <button className = {styles.addTaskBtn} onClick={handlet}><FiPlus className = {styles.addIcon} /></button>
      </div>
      <div className = {styles.operations}>
        <div className = {styles.operations1}>
          <select name="taskStatus" id="taskStatus" className = {isDark ? `${styles.selectTask} ${styles.darkSelect}` : `${styles.selectTask}`}>
             <option value="default">Default</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
          <button className = {styles.completedBtn}>Mark All Completed</button>
        </div>
        <div className = {styles.operations2}>
          <input type="text" placeholder = "Search Todo" className = {isDark ? `${styles.searchInputContainer} ${styles.darkSearchInput}` : `${styles.searchInputContainer}`}/>
          <button className = {styles.searchTaskBtn}><FaMagnifyingGlass className = {styles.searchIcon} /></button>
        </div>
      </div>
      <TaskList taskList = {taskList} setTaskList = {setTaskList} completed = {completed} setCompleted = {setCompleted} isDark = {isDark} />
    </div>
  )
}