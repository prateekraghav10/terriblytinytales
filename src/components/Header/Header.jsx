import React from 'react'
import styles from './header.module.css'
import img from "../../assets/logo.png"
const Header = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <img src={img} className={styles.logo}/>
            <span className={styles.title}>Stories</span>
        </div>
        <div className={styles.right}>
            <button className={styles.btn}>Courses</button>
        </div>
    </div>
  )
}

export default Header