import React from 'react'
import Checkbox from '../checkbox/page'
import SubLabelInput from '../subLabelInput/page'
import TabInput from '../tabInput/page'
import styles from './company.module.scss'
import TabButton from '../tabButton/page' 

const Company = (props: any) => {
  return (
    <div className={`${styles.step_three} mx-auto p-4`}>
        <p className={`${styles.purple_heading}`}>Company Details</p>
        <div className='border-bottom'>
            <TabInput label='Company Name' placeholder='Company Name'/>
            <TabInput label='Chamber of commerce number' placeholder='Chamber of commerce number'/>
            <TabInput label='Passenger transport number' placeholder='PE1234'/>
        </div>
        <div className='pt-4 border-bottom'>
          <TabInput label='Street'/>
        </div>
        <div className='pt-4'> 
          <p className={`${styles.purple_heading}`}>Contact</p>
          <TabInput label='First Name' placeholder='First Name'/>
          <TabInput label='Last Name' placeholder='Last Name'/>
          <TabInput label='Function' placeholder='Function'/>
          <TabInput label='Email Address' placeholder='mail@example.ni'/>
          <TabInput label='Phone Number' placeholder='Phone Number'/>
        </div>
        <div className="row">
              <div className="d-flex justify-content-between">
                <TabButton
                  title='Previous'
                  navigate={props.handlePrevVerticalClick} />
                <TabButton
                  title="Next One"
                  navigate={props.handleNextVerticalClick} />
              </div>
            </div>
    </div>
  )
}

export default Company