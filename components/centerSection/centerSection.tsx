"use client"
import React, {useState} from 'react';
import styles from './centerSection.module.scss'
import CenterModal from "../centerModal/centerModal"
import MyAccount from "../myAccount/page"
import ContactDetails from '../contactDetails/page'
import Company from '../company/page'
import { 
    MDBNav,
    MDBNavItem,
    MDBNavLink, 
    } from 'mdbreact';

import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';
import TransportationOptions from '../transportationOptions/page';
import Notifications from '../notifications/page';
import PaymentDetails from '../paymentDetails/page';
import Municipalities from '../municipalities/page';
import Airports from '../airports/page';

  

const centerSection = () => {
    const[accountCreated, setAccountCreated] = useState<boolean>(false)
    const [verticalActive, setVerticalActive] = useState('tab1');

  const handleVerticalClick = (value: string) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };

    return (
        <>
            {
            !accountCreated ?
            (
                <>
                    <div className={`${styles.main_body}`}>
                        <div>
                            <h3>Create Account</h3>
                        </div>
                        <div className={`${styles.modal_parent}`}>
                            <CenterModal setAccountCreated={setAccountCreated}/>
                        </div>
                    </div>
                </>
            )
            : 
            (
                <>
                <div className={`${styles.main_body}`}>
                    <MDBRow>
                    <MDBCol size='3'>
                    <MDBTabs pills className='flex-column text-center'>
                        <MDBTabsItem>
                        <MDBTabsLink active={verticalActive === 'tab1'}>
                            My Account
                        </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                        <MDBTabsLink active={verticalActive === 'tab2'}>
                            Contact Details
                        </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                        <MDBTabsLink active={verticalActive === 'tab3'}>
                            Company
                        </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                        <MDBTabsLink active={verticalActive === 'tab4'}>
                            Transportation options
                        </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                        <MDBTabsLink active={verticalActive === 'tab5'}>
                            Municipalities
                        </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                        <MDBTabsLink active={verticalActive === 'tab6'}>
                            Airports
                        </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                        <MDBTabsLink active={verticalActive === 'tab7'}>
                            Notifications
                        </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                        <MDBTabsLink active={verticalActive === 'tab8'}>
                            Payment details
                        </MDBTabsLink>
                        </MDBTabsItem>
                    </MDBTabs>
                    </MDBCol>
                    <MDBCol size='9'>
                    <MDBTabsContent>
                        <MDBTabsPane show={verticalActive === 'tab1'}>
                            <MyAccount handleVerticalClick={() => handleVerticalClick('tab2')}/>
                        </MDBTabsPane>
                        <MDBTabsPane show={verticalActive === 'tab2'}>
                            <ContactDetails 
                                handlePrevVerticalClick={() => handleVerticalClick('tab1')}
                                handleNextVerticalClick={() => handleVerticalClick('tab3')} />
                        </MDBTabsPane>
                        <MDBTabsPane show={verticalActive === 'tab3'}>
                            <Company
                                handlePrevVerticalClick={() => handleVerticalClick('tab2')}
                                handleNextVerticalClick={() => handleVerticalClick('tab4')}
                            />
                        </MDBTabsPane>
                        <MDBTabsPane show={verticalActive === 'tab4'}>
                            <TransportationOptions
                                handlePrevVerticalClick={() => handleVerticalClick('tab3')}
                                handleNextVerticalClick={() => handleVerticalClick('tab5')}
                            />
                        </MDBTabsPane>
                        <MDBTabsPane show={verticalActive === 'tab5'}>
                            <Municipalities
                                handlePrevVerticalClick={() => handleVerticalClick('tab4')}
                                handleNextVerticalClick={() => handleVerticalClick('tab6')}
                            />
                        </MDBTabsPane>
                        <MDBTabsPane show={verticalActive === 'tab6'}>
                            <Airports
                                handlePrevVerticalClick={() => handleVerticalClick('tab5')}
                                handleNextVerticalClick={() => handleVerticalClick('tab7')}
                            />
                        </MDBTabsPane>
                        <MDBTabsPane show={verticalActive === 'tab7'}>
                            <Notifications
                                handlePrevVerticalClick={() => handleVerticalClick('tab6')}
                                handleNextVerticalClick={() => handleVerticalClick('tab8')}
                            />
                        </MDBTabsPane>
                        <MDBTabsPane show={verticalActive === 'tab8'}>
                            <PaymentDetails
                                handlePrevVerticalClick={() => handleVerticalClick('tab7')}
                                handleNextVerticalClick={() => handleVerticalClick('tab9')}
                            />
                        </MDBTabsPane>
                    </MDBTabsContent>
                    </MDBCol>
                    </MDBRow>
                </div>
                </>
            )
        }
        </>
    )
}

export default centerSection