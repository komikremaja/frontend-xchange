import React from 'react'
import { BorderButtonBack, BorderInKiri, BorderKanan, BorderKiri, BorderLogin, TextTitleKiri } from '../Styles/LoginStyle/LoginStyleComponent'
import BorderKiriAuth from '../components/BorderAuth/BorderKiriAuth'
import BorderKananAuth from '../components/BorderAuth/BorderKananAuth'


export default function Login() {
  return (
    <BorderLogin>
      <BorderKiriAuth title='Welcome and change your money'/>
      <BorderKananAuth currPage='Login'/>
    </BorderLogin>
  )
}
