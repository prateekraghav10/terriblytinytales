import React from 'react'
import styles from './author.module.css'
import img from '../../assets/avatar.jpeg'
import { PiSmileyStickerFill } from "react-icons/pi";
import { FaCopyright } from "react-icons/fa6";

const Author = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
       <img src={img} className={styles.avatar}/>
      </div>
      <div className={styles.right}>
        <div className={styles.name}>
          Prateek Raghav
          &nbsp;
          <PiSmileyStickerFill className={styles.icon}/>
          <FaCopyright className={styles.icon} id={styles.icon1}/>
        </div>
        <div className={styles.stats}>
         <table className={styles.table}>
         <tr>
          <td>
          <button className={styles.stats_follow}>
            6482
          </button>
          </td>
          <td>
          <button className={styles.stats_follow}>
            6482
          </button>
          </td>
          </tr>
          <tr>
          <td>
            Followers
          </td>
          <td>
            Follwing
          </td>
          </tr>
         </table>
        </div>
      </div>
    </div>
  )
}

export default Author