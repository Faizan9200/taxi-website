import React from 'react'
import styles from './button.module.scss'

const Button = (props: any) => {
  return (
    <div className='w-100 mb-4'>
      <button type={props?.type} className={`${styles.button} w-100 p-2`}>{props.name}</button>
    </div>
  )
}

export default Button