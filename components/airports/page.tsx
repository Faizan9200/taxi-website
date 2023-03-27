'use Client'
import React from 'react'
import SearchBar from '../searchBar/page'
import TabButton from '../tabButton/page'
import {Row , Col} from 'react-bootstrap';
import styles from './airports.module.scss'
import Dropdown from '../dropdown/page';
import Country from '../country/page';

const Airports = (props: any) => {
  return (
    <div className={`${styles.step_one} mx-auto p-4`}>
        <p className={`${styles.purple_heading}`}>Airports</p>
        <p className='text-black-50'>Below you can select from which airports you want to receive ride requests.</p>
        <Row className={`${styles.gray_bg}`}>
          <Col>
            <SearchBar placeholder='Find an airport...'/>
          </Col>
          <Col>
            <Dropdown selectPlaceholder='Filter by country...'/>
          </Col>
        </Row>
        <div className='mt-3 mb-4'>
          <Country/>
        </div>
        <p className={`${styles.purple_heading}`}>My airports</p>
        <p className={`${styles.color_text}`}>You have not selected any airports yet</p>
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

export default Airports