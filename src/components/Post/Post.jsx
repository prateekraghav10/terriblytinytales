import React from 'react'
import styles from "./post.module.css"
import { FaThumbsUp } from "react-icons/fa";

const Post = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.title}>
          {props.title}
        </div>
        <div className={styles.like_btn}>
        <FaThumbsUp  className={styles.like_icon}/>
        </div>
        </div>
        <div className={styles.content}>
        {props.content.split('\n').map((paragraph, index) => (
      <div key={index}>{paragraph}</div>
    ))}
        </div>
        <div className={styles.details}>
          <div className={styles.author}>
            <span className={styles.tag}>{props.tag}</span> by {props.author}
          </div>
          <div className={styles.moreinfo}>
            {props.date} | {props.minute} mins Read | {props.views} views
          </div>
      </div>
    </div>
  )
}

export default Post