import React from 'react'
import styles from './transportationOptions.module.scss'
import TabButton from '../tabButton/page' 
import CheckSection from './checkSection'

const TransportationOptions = (props: any) => {
  return (
    <div className={`${styles.step_three} mx-auto p-4`}>
        <p className={`${styles.purple_heading}`}>Destinations</p>
          <CheckSection
            title='Airport transportation'
            text_area="Rides from airports in the Netherlands, Belgium and Germany. Select at 'Airports' from which
            airports you want to receive rides to certain provinces"
          />
          <CheckSection
            title='A to B transport'
            text_area="Rides to and from locations in the Netherlands. Select at 'Municipalities' from and to which
            municipalities you want to receive journey requests."
          />
        <div className='border-bottom mb-2'></div>
        <p className={`${styles.purple_heading}`}>Kind of taxi</p>
          <CheckSection
              title='Speed'
              text_area="Receive ride requests that happen within 24 hours."
            />
          <CheckSection
              title='Station wagon'
              text_area="Receive trip requests that must be driven with a station wagon."
            />
          <CheckSection
              title='Bus'
              text_area="Receive ride requests that need to be driven with a taxi bus."
            />
          <CheckSection
              title='Luxury'
              text_area="Receive ride requests to be driven in a luxury car by a driver in a suit."
            />
          <CheckSection
              title='Electric'
              text_area="Receive trip requests that need to be driven with an electric car."
            />
          <div className='border-bottom mb-2'></div>
          <p className={`${styles.purple_heading}`}>Extra Options</p>
          <CheckSection
              title='Nameplate'
              text_area="Receive ride requests where the passenger needs to be picked up with a name sign."
            />
          <CheckSection
              title='Baby chair'
              text_area="Check this option if you have a baby seat suitable for a child from 0 to 13 kg."
            />
          <CheckSection
              title='High chair'
              text_area="Check this option if you have a high chair, suitable for a child from 9 to 18 kg."
            />
          <CheckSection
              title='TX hallmark'
              text_area="Check this option if your taxi company has the TX quality mark."
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

export default TransportationOptions