import styles from './styles/todo.module.css';
import { FaCheck, FaTrash } from 'react-icons/fa6';
import { v4 } from 'uuid';
export default function TaskList(props: any) {
  function handleDelete(item: any) {
    const newList = props.taskList.filter((task: any) => {
      return task !== item;
    });
    props.setTaskList(newList);
  }
  return (
    <div className = {styles.todosSection}>
          <ol className = {styles.tasksList}>
            {
              props.taskList.map((item: any) => {
                const id = v4();
                return (
                  <div key = {id}> 
                    <div className = {styles.taskInfoContainer}>
                      <li>{item}</li>
                      <div className = {styles.btns}>
                        <button className = {styles.deleteTaskBtn} onClick = {() => handleDelete(item)}><FaTrash className = {styles.deleteIcon} /></button>
                        <button className = {styles.markTaskBtn} ><FaCheck className = {styles.checkIcon}/></button>
                      </div>
                    </div>
                    <hr className = {props.isDark ? `${styles.hrule} ${styles.darkHrule}` : `${styles.hrule}`}/>
                  </div>
                )
              })
            }
        </ol>
      </div>
  )
}