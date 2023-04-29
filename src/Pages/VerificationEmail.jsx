import React from 'react'
import { BorderChangePassword, BorderInChangePassword, TitleChangePassword } from '../Styles/ChangePassword/ChangePasswordStyleComponent'
import FormChangePassword from '../components/FormAuth/FormChangePassword'
import FormVerificationEmail from '../components/FormProfile/FormVerificationEmail'

export default function VerificationEmail() {
  return (
    <BorderChangePassword>
        <BorderInChangePassword>
            <TitleChangePassword>Verification Email</TitleChangePassword>
            <FormVerificationEmail/>
        </BorderInChangePassword>
    </BorderChangePassword>
  )
}
