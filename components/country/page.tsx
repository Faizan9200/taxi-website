'use Client'
import React from 'react'
import {Row , Col} from 'react-bootstrap';
import styles from './country.module.scss'

const Country = (props: any) => {
  return (
   <>
    <Row className='g-1'>
      <Col xs={4}>
        <p className={`${styles.body_box}`}>Eindhoven <br></br>
        Airport (EIN)</p>
      </Col>
      <Col xs={4}>
        <p className={`${styles.body_box}`}>Groningen <br></br>
        Airport Eelde <br></br>
        (GRO)</p>
      </Col>
      <Col xs={4}>
        <p className={`${styles.body_box}`}>Maastricht <br></br>
        Aachen <br></br>
        Airport (MST)</p>
      </Col>
      <Col xs={4}>
        <p className={`${styles.body_box}`}>Rotterdam <br></br>
        The Hague <br></br>
        Airport (RTM)</p>
      </Col>
      <Col xs={4}>
        <p className={`${styles.body_box}`}>Schiphol <br></br>
        (AMS)</p>
      </Col>
      
    </Row>
  </>
  )
}

export default Country