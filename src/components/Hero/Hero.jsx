import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () =>{
    return <section className={styles.container} id="hero">
        <div className={styles.content}><h1 className={styles.title}>I am Ayush Vishwakarma</h1>
            <p className={styles.description}>I'm Ayush Vishwakarma, a Computer Science student at VIT Bhopal University, specializing in Cloud Computing and Automation. I have a passion for web development, machine learning, and contributing to open-source projects.</p>
            <a href="https://drive.google.com/file/d/1B0Rvmc9lLGzDDx_ZWHldbDH-WTSJ0AwR/view?usp=sharing" target="_blank" className={styles.contactBtn}>Resume</a>
        </div>
        <img src={getImageUrl("hero/myimg.png")} alt="My Image" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
}