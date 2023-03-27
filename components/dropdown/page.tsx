'use Client'
import React from 'react'
import styles from './dropdown.module.scss'

const Dropdown = (props: any) => {
  return (
    <select className='form-select' aria-label='Default select example'>
    <option selected>{props.selectPlaceholder}</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    </select>
  )
}

export default Dropdown