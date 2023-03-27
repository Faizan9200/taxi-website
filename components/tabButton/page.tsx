import React from 'react'
import styles from './tabButton.module.scss'

const TabButton = (props: any) => {
  return (
    <div>
        <button 
          className={`${styles.tab_button} p-2`}
          onClick={props.navigate}
        >{props.title}</button>
    </div>
  )
}

export default TabButton