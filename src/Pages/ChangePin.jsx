import React from 'react'
import { BorderChangePassword, BorderInChangePassword, TitleChangePassword } from '../Styles/ChangePassword/ChangePasswordStyleComponent'
import FormChangePin from '../components/FormAuth/FormChangePin'

export default function ChangePin() {
  return (
    <BorderChangePassword>
        <BorderInChangePassword>
            <TitleChangePassword>Change Pin</TitleChangePassword>
            <FormChangePin/>
        </BorderInChangePassword>
    </BorderChangePassword>
  )
}
