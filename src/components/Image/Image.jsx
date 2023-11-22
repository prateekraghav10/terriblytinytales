import React from 'react'
import styles from "./image.module.css"
import img from "../../assets/image.jpg"
const Image = () => {
  return (
    <div className={styles.container}>
        <img src={img} className={styles.image}/>
    </div>
  )
}

export default Image