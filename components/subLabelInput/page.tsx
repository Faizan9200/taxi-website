import React from 'react'
import styles from './subLabel.module.scss'

const SubLabelInput = (props: any) => {
  return (
    <div className={`${styles.input_row} row mb-3`}>
        <div className={`${styles.label_row} pe-0 col-6`}>
            <label className={`${styles.input_label} px-2`}>{props.label}</label>
            <br />
            <label className={`${styles.input_subLabel} px-2`}>{props.subLabel}</label>
        </div>
        <div className='col-6'>
            <input type="number" className={`${styles.tab_input} p-2 rounded w-75`} placeholder={props.placeholder}/>
        </div>
    </div> 
  )
}

export default SubLabelInput