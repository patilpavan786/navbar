import React from 'react'
import styles from "./Link.module.css"
function link(props) {
  return (
    <div className={styles.menu} style={{backgroundColor:`${props.style}`}}>
    <span className={styles.desktopMenulink}>
    <h3> {props.link} links 1 </h3>
      <p>link 1</p>
      <p>link 2</p>
      <p>link 3</p>
      <p>link 4</p>
      <p>link 5</p>
    </span>
    <span className={styles.desktopMenulink}>
    <h3>{props.link} links 1 </h3>
      <p>link 1</p>
      <p>link 2</p>
      <p>link 3</p>
      <p>link 4</p>
      <p>link 5</p>
    </span>
  </div>
  )
}

export default link