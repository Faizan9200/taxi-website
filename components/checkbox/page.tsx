import React from 'react'
import styles from './checkbox.module.scss'

const Checkbox = (props: any) => {
  return (
    <div className={`${styles.input_row} row`}>
        <div className={`${styles.label_row} pe-0 col-6`}>
            <label className={`${styles.input_subLabel} px-2`}>{props.label}</label>
        </div>
        <div className='col-6'>
            <input type='checkbox' className='form-check-input' />

        </div>
    </div> 
  )
}

export default Checkbox