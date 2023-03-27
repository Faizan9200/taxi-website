"use client"
import React,{useState} from 'react'
import styles from './input.module.scss'

const Input = (props: any) => {
  return (
    <div>
      <div className='mb-4'>
        <input
         type={props?.labelName === 'email' ? props.labelName : "text"} 
         className={`${styles.form_control} w-100`} 
          {...props.register(props.labelName,{required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/  })}
          onChange={(e) => props.setEmail(e.target.value)}
         placeholder={props.placeholder}
         />         
          {props.errors?.type == "required" && (<p className="text-danger">This field is required.</p>)}
          {props.errors?.type == "pattern" && (<p className="text-danger">Please enter a valid email address.</p>)} 
      </div>
    </div>
  )
}

export default Input