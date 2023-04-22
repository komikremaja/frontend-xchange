import React from 'react'
import { BorderLogin } from '../Styles/LoginStyle/LoginStyleComponent'
import BorderKiriAuth from '../components/BorderAuth/BorderKiriAuth'
import BorderKananAuth from '../components/BorderAuth/BorderKananAuth'

export default function ForgetPin() {
  return (
    <BorderLogin>
        <BorderKiriAuth title='Enter your email for forget pin'/>
        <BorderKananAuth currPage='ForgetPin'/>
    </BorderLogin>
  )
}
