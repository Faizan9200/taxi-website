import React from 'react'
import styles from './tabInput.module.scss'

const TabInput = (props: any) => {
  
  return (
    <div className={`${styles.input_row} row mb-3`}>
        <label className={`col-6 ${styles.input_label} p-2`}>{props.title}</label>
        <div className='col-6'>
          <input
          type="text"
          className={`${styles.tab_input} p-2 rounded w-75`}
            // {...props.register(props.labelname,{required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})}
            onChange={(e) => props.setValue(e.target.value)}
          placeholder={props.placeholder}
          />  
        </div>       
          {props.errors?.type == "required" && (<p className="text-danger">This field is required.</p>)}
          
    </div> 
  )
}

export default TabInput