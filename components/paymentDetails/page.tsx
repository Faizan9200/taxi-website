'use Client'
import React from 'react'
import TabButton from '../tabButton/page'
import TabInput from '../tabInput/page'
import styles from './paymentdetails.module.scss'

const PaymentDetails = (props: any) => {
  return (
    <div className={`${styles.step_one} mx-auto p-4`}>
        <p className={`${styles.purple_heading}`}>Payment details</p>
        <TabInput label='Name of account holder' placeholder='Name of account holder'/>
        <TabInput label='IBAN' placeholder='NL20INGB0001234567'/>
        <TabInput label='VAT number' placeholder='NL00123456780'/>
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

export default PaymentDetails