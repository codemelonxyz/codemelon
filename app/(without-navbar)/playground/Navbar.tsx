import { BsCoin } from "react-icons/bs";
import { FaArrowLeftLong } from "react-icons/fa6";
import styles from './styles/navbar.module.css';

export default function NavBar()
{
  return (
    <div className={styles.navbar}>
      <div className={styles.part1}>
        <FaArrowLeftLong />
        <p className={styles.questionName}>Back &nbsp; | &nbsp; Question Name</p>
      </div>
      <div className={styles.part2}>
        <button className={styles.pointsBtn}>Total Points <BsCoin /> Number</button>
          <button className={styles.runBtn}>&#9658; Run</button>
          <button className={styles.submitBtn}>Submit</button>
      </div>
    </div>
  )
}