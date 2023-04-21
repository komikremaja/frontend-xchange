import React, { useState } from 'react'
import { BorderLogin } from '../Styles/LoginStyle/LoginStyleComponent'
import BorderKiriAuth from '../components/BorderAuth/BorderKiriAuth'
import BorderKananAuth from '../components/BorderAuth/BorderKananAuth'
import FormCreatePin from '../components/FormAuth/FormCreatePin'

export default function Register() {
  const [pinForm, setPinForm] = useState();
  const [idUser, setIdUser] = useState();

  function handlePinForm(value) {
    setPinForm(value);
  }

  function handleIdUser(value) {
    setIdUser(value)
  }

  return (
    <BorderLogin>
      <FormCreatePin pinOpen={pinForm} idUserValue={idUser}/>
      <BorderKiriAuth title='Create your new account and exchange your money' />
      <BorderKananAuth currPage='Register' onChildChange={handlePinForm} onIdUser={handleIdUser} />
    </BorderLogin>
  )
}
