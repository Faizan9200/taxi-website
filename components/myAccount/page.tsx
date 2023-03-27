'use Client'
import React, {useState} from 'react'
import TabButton from '../tabButton/page'
import TabInput from '../tabInput/page'
import styles from './Account.module.scss'
import { useForm  } from 'react-hook-form';

type formValues = {
  firstname: string
  lastname: string
}

const MyAccount = (props: any) => {
  const {handleSubmit, register, formState:{errors}} = useForm<FormValues>();

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');

  const accountFunction = (event: {preventDefault: () => void}) => {
    console.log(event)
  }
  return (
    <div className={`${styles.step_one} mx-auto p-4`}>
        <p className={`${styles.purple_heading}`}>Account Information</p>
        <p className={`${styles.change_heading}`}>Change your account information below</p>
        <form onSubmit={handleSubmit(accountFunction)}>
          <TabInput
            title="First Name"
            labelname='firstname'
            errors={errors.firstname}
            register={register}
            setValue={setFirstName} 
            placeholder='First Name'
          />
          
          <TabInput 
            title="Last Name"
            labelname='lastname'
            errors={errors.lastname}
            register={register}
            setValue={setLastName}
            placeholder='Last Name'
          />
          <div className={`d-flex justify-content-end`}>
              <TabButton
              title='Next One'
              navigate={props.handleVerticalClick} 
              />
          </div>
        </form>
        
    </div>
  )
}

export default MyAccount