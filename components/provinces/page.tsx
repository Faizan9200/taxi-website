'use Client'
import React from 'react'
import {Row , Col} from 'react-bootstrap';
import styles from './provinces.module.scss'

const Provinces = (props: any) => {
  return (
   <>
    <Row className='g-1'>
      <Col xs={4}>
        <p className={`${styles.head_box}`}>Ah and hunze</p>
      </Col>
      <Col xs={4}>
        <p className={`${styles.head_box}`}>Aalsmeer</p>
      </Col>
      <Col xs={4}>
        <p className={`${styles.head_box}`}>Aalten</p>
      </Col> 
    </Row>
    <Row className='g-1'>
      <Col xs={4}>
        <p className={`${styles.body_box}`}>Eight cart games</p>
      </Col>
      <Col xs={4}>
        <p className={`${styles.body_box}`}>Alblasserdam</p>
      </Col>
      <Col xs={4}>
        <p className={`${styles.body_box}`}>Albrandswaard</p>
      </Col>
      <Col xs={4}>
        <p className={`${styles.body_box}`}>Alkmaar</p>
      </Col>
      <Col xs={4}>
        <p className={`${styles.body_box}`}>Almelo</p>
      </Col> 
      <Col xs={4}>
        <p className={`${styles.body_box}`}>Almere</p>
      </Col> 
      <Col xs={4}>
        <p className={`${styles.body_box}`}>Almere port</p>
      </Col>
      <Col xs={4}>
        <p className={`${styles.body_box}`}>Alphen aan den Rijn</p>
      </Col> 
      <Col xs={4}>
        <p className={`${styles.body_box}`}>Alphen-chaam</p>
      </Col>
      <Col xs={4}>
        <p className={`${styles.body_box}`}>Altena-aalburg</p>
      </Col> 
      <Col xs={4}>
        <p className={`${styles.body_box}`}>Altena works dam</p>
      </Col> 
      <Col xs={4}>
        <p className={`${styles.body_box}`}>Altena forest richem</p>
      </Col> 
      <Col xs={4}>
        <p className={`${styles.body_box}`}>Ameland</p>
      </Col> 
      <Col xs={4}>
        <p className={`${styles.body_box}`}>Amersfoort</p>
      </Col> 
      <Col xs={4}>
        <p className={`${styles.body_box}`}>Amstelveen</p>
      </Col> 
      <Col xs={4}>
        <p className={`${styles.body_box}`}>Amsterdam</p>
      </Col> 
      <Col xs={4}>
        <p className={`${styles.body_box}`}>Amsterdam North</p>
      </Col> 
      <Col xs={4}>
        <p className={`${styles.body_box}`}>Amsterdam South East</p>
      </Col> 
    </Row>
  </>
  )
}

export default Provinces