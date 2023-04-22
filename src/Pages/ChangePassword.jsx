import React from 'react'
import { BorderChangePassword, BorderInChangePassword, TitleChangePassword } from '../Styles/ChangePassword/ChangePasswordStyleComponent'
import FormChangePassword from '../components/FormAuth/FormChangePassword'

export default function ChangePassword() {
  return (
    <BorderChangePassword>
        <BorderInChangePassword>
            <TitleChangePassword>Change Password</TitleChangePassword>
            <FormChangePassword/>
        </BorderInChangePassword>
    </BorderChangePassword>
  )
}
