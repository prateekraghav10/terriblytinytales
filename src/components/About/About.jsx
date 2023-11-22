import React from 'react'
import styles from "./about.module.css"
import { IoStar } from "react-icons/io5";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

const About = () => {
  return (
    <div className={styles.container}>
        <div className={styles.about}>
            Aspiring Full Stack Developer | CSE'24
        </div>
        <div className={styles.links}>
            <a className={styles.link} href="https://instagram.com/prateekraghav10">https://instagram.com/prateekraghav10</a>
        </div>
        <div className={styles.engagement}>
        <IoStar  id={styles.star}/> 12.5k
        <FaRegThumbsUp className={styles.icons} id={styles.thumbs}/> 4.5k
        <FaEye className={styles.icons} id={styles.view}/> 25.6k
        <CiHeart className={styles.icons} id={styles.heart}/> 2k

        </div>
    </div>
  )
}

export default About