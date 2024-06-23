import styles from './styles/todo.module.css';
import { FaCheck, FaTrash } from 'react-icons/fa6';
import { v4 } from 'uuid';
export default function TaskList(props: any)
{
  return (
    <div className = {styles.todosSection}>
          <ol className = {styles.tasksList}>
            {
              props.taskList.map((item: any, index: any) => {
                const id = v4();
                return (
                  <div key = {id}> 
                    <div className = {styles.taskInfoContainer}>
                      <li>{item}</li>
                      <div className = {styles.btns}>
                        <button className = {styles.deleteTaskBtn}><FaTrash className = {styles.deleteIcon} /></button>
                        <button className = {styles.markTaskBtn}><FaCheck className = {styles.checkIcon}/></button>
                      </div>
                    </div>
                    <hr className = {styles.hrule}/>
                  </div>
                )
              })
            }
        </ol>
      </div>
  )
}