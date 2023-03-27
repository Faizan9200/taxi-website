"use client"
import Image from 'next/image'
import React, {useState} from 'react'
import Button from '../button/page'
import InputPass from '../input/inputPassword'
import ConfirmPass from '../input/confirmPassword'
import Input from '../input/inputText'
import styles from './modal.module.scss'
import { useForm  } from 'react-hook-form';

type formValues = {
  email: string
  password: string
  confirmPassword: string
}

const CenterModal = (props: any) => {
  const {register, handleSubmit, formState:{errors}} = useForm<FormValues>();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const registerFunction = (event: {preventDefault: () => void}) => {
    props.setAccountCreated(true)
  }
  return (
    <div className={`${styles.centered_element} p-5 mx-auto`}>
        <form onSubmit={handleSubmit(registerFunction)}>
        <Input
          labelName="email"
          errors={errors.email}
          register={register}
          setEmail={setEmail}
          placeholder={'Enter email address'}
        />
        <InputPass
          labelName="password"
          errors={errors.password}
          register={register}
          setPassword={setPassword}
          placeholder={'Enter Your Password'}/>
        <ConfirmPass
          labelName="confirmPassword"
          errors={errors.confirmPassword}
          register={register}
          setPassword={setConfirmPassword}
          placeholder={'Confirm Password'}
          password={password}
          />
          
        <Button
          name="Register"
          type="submit"
        />
        </form>
        <div className={`d-flex`}>
            <div>
                <Image src='/image.png' alt='link-image' width='35' height='35' />
            </div>
            <div className={`${styles.signin_link} ms-4`}>
                <a href="#">Do you already have an account?</a>
            </div>
        </div>
    </div>
  )
}

export default CenterModal