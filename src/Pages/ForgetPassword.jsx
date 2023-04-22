import React from 'react'
import { BorderLogin } from '../Styles/LoginStyle/LoginStyleComponent'
import BorderKiriAuth from '../components/BorderAuth/BorderKiriAuth'
import BorderKananAuth from '../components/BorderAuth/BorderKananAuth'

export default function ForgetPassword() {
  return (
    <BorderLogin>
        <BorderKiriAuth title='Enter your email for forget password'/>
        <BorderKananAuth currPage='ForgetPass'/>
    </BorderLogin>
  )
}
