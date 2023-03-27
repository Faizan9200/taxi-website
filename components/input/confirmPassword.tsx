"use client"
import React, { useState } from 'react'
import styles from './input.module.scss'

const ConfirmPass = (props: any) => {
    
  const [passwordShow, setPasswordShow] = useState<boolean>(false)
  return (
    <div>
      <div className='mb-4'>
        <input 
          type={!passwordShow ? "password" : "text" }
          className={`${styles.form_control} w-100`} 
          placeholder={props.placeholder}
          {...props.register(
            props.labelName,{
                required: true,
                validate: (value) => value == props.password || "The Password doesn't match"
            })}
            onChange={(e) => props.setPassword(e.target.value)}
        />
         {props.errors?.type == "required" && (<p className="text-danger">This field is required.</p>)}
          {props.errors?.type == "validate" && (<p className="text-danger">The Password doesn't match</p>)} 
      </div>
    </div>
  )
}

export default ConfirmPass