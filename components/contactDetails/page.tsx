import React from 'react'
import Checkbox from '../checkbox/page'
import SubLabelInput from '../subLabelInput/page'
import TabInput from '../tabInput/page'
import styles from './contact.module.scss'
import TabButton from '../tabButton/page' 

const ContactDetails = (props: any) => {
  return (
    <div className={`${styles.step_two} mx-auto p-4`}>
        <p className={`${styles.purple_heading}`}>Email Addresses</p>
        <div className='border-bottom'>
            <TabInput label='Ride available mails' placeholder='mail@example.ni'/>
            <TabInput label='Confirmation and trip change emails' placeholder='mail@example.ni'/>
            <TabInput label='Invoice emails' placeholder='mail@example.ni'/>
        </div>
        <div className='pt-4'>
        <p className={`${styles.purple_heading}`}>Phone Number</p>
            <SubLabelInput label='Number for customer' subLabel='This is the number the customer is given to reach you' placeholder='phone number'/>
            <SubLabelInput label='Private phone number for fast taxi' subLabel='We will not communicate this number directly to the customer, but we use it if we want to reach you.' placeholder='phone number'/>
            <div className='mb-3'>
              <Checkbox label='Sky taxi can contact me by phone for unauctioned rides' />
            </div>
            <SubLabelInput label='Mobile number for SMS' subLabel='We will send urgent requests via SMS to this number for journeys that are booked within 24 hours.' placeholder='phone number'/>
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
    </div>
  )
}

export default ContactDetails