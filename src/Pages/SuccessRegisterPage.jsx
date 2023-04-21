import React from 'react'
import { BorderLogin } from '../Styles/LoginStyle/LoginStyleComponent'
import BorderKiriAuth from '../components/BorderAuth/BorderKiriAuth'
import BorderKananAuth from '../components/BorderAuth/BorderKananAuth'

export default function SuccessRegisterPage() {
  return (
    <BorderLogin>
    <BorderKiriAuth title='Register success, enjoy your exchange now'/>
    <BorderKananAuth currPage='SuccessRegister'/>
  </BorderLogin>
  )
}
