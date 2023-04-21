import React from 'react'
import { BorderInKanan, BorderKanan } from '../../Styles/LoginStyle/LoginStyleComponent'
import FormLogin from '../FormAuth/FormLogin'

export default function BorderKananLogin() {
    return (
        <BorderKanan>
            <BorderInKanan>
                <FormLogin/>
            </BorderInKanan>
        </BorderKanan>
    )
}
