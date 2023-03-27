import React from 'react'
import styles from './notifications.module.scss'
import TabButton from '../tabButton/page' 
import CheckSection from '../transportationOptions/checkSection'

const Notifications = (props: any) => {
  return (
    <div className={`${styles.step_three} mx-auto p-4`}>
        <p className={`${styles.purple_heading}`}>New Rides</p>
        <p className='text-black-50'>Receive notifications for new arrivals.</p>
          <CheckSection
            title='Emails' addMargin='mb-0'
          />
          <CheckSection
            title='App notification' addMargin='mb-0'
          />
    
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

export default Notifications