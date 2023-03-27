'use Client'
import React from 'react'
import SearchBar from '../searchBar/page'
import TabButton from '../tabButton/page'
import {Row , Col} from 'react-bootstrap';
import styles from './municipalities.module.scss'
import Provinces from '../provinces/page';
import Dropdown from '../dropdown/page';

const Municipalities = (props: any) => {
  return (
    <div className={`${styles.step_one} mx-auto p-4`}>
        <p className={`${styles.purple_heading}`}>Municipalities</p>
        <p className='text-black-50'>Below you can select from and to which municipalities you want to receive ride requests.</p>
        <Row className={`${styles.gray_bg}`}>
          <Col>
            <SearchBar placeholder='Find a municipality...'/>
          </Col>
          <Col>
            <Dropdown selectPlaceholder='Filter by province...'/>
          </Col>
        </Row>
        <div className='mt-3 mb-4'>
          <Provinces/>
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

export default Municipalities