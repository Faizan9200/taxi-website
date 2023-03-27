import React from 'react'
import styles from './transportationOptions.module.scss'
import { Row, Col } from 'react-bootstrap';
import Checkbox from '../checkbox/page';

const CheckSection = (props: any) => {
  return (
    <div className={`${styles.section_area} mb-3`}>
      <Row className='align-items-center'>
        <Col xl={10}>
          <h6 className={`${props.addMargin}`}>{props.title}</h6>
          <p>{props?.text_area}</p>
        </Col>
        <Col>
          <Checkbox/>
        </Col>
      </Row>
      
    </div>
  )
}

export default CheckSection