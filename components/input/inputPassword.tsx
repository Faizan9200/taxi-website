"use client"
import React, { useState } from 'react'
import styles from './input.module.scss'

const InputPass = (props: any) => {
  
  const [passwordShow, setPasswordShow] = useState<boolean>(false)
  return (
    <div>
      <div className='mb-4'>
        <input 
          type={!passwordShow ? "password" : "text" }
          className={`${styles.form_control} w-100`} 
          placeholder={props.placeholder}
          {...props.register(props.labelName,{required: true})}
          onChange={(e) => props.setPassword(e.target.value)}
        />
         {props?.errors && <p className="text-danger">This field is required.</p>}
      </div>
    </div>
  )
}

export default InputPass