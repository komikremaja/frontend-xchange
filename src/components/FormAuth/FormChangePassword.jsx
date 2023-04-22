import React, { useState } from 'react'
import { BorderFormChangePass } from '../../Styles/ChangePassword/ChangePasswordStyleComponent'
import { BorderRegister } from '../../Styles/FormLogin/FormLoginStyleComponent'
import { useNavigate, useParams } from 'react-router-dom';
import { ChangePassService } from '../../Services/RegisterService';
import { ErrorMessageCannotEmpty } from '../../Styles/FormRegister/FormSuccessRegisterStyledComponent';

export default function FormChangePassword() {
    const { email } = useParams();
    const [newPassword, setNewPassword] = useState();
    const [checkNewPassword, setCheckNewPassowrd] = useState();
    const [errorPassword, setErrorPassword] = useState();
    const [messageError, setMessageError] = useState();
    const navigate = useNavigate();


    const changePass = async() =>{
        const data = {
            email,
            newPassword,
            checkNewPassword
        }
        const responseChangePass = await ChangePassService(data);
        console.log("Response Changes pass: ", responseChangePass.data);
        if(responseChangePass.data.message === "Password yang anda masukkan berbeda"){
            setErrorPassword("ShowDisplay");
            setMessageError(responseChangePass.data.message);
        }
        if(responseChangePass.data.status === 202){
            navigate(`/user/success`);
        }
    }

    function newPassHandler(e){
        setNewPassword(e.target.value);
        setErrorPassword("");
    }
    function confirmPassHandler(e){
        setCheckNewPassowrd(e.target.value);
        setErrorPassword("");
    }

    function submitForm(e){
        e.preventDefault();
        changePass();
    }

    return (
        <BorderFormChangePass>
            <form method="put" onSubmit={submitForm}>
                <input type='password' placeholder='Password' className='FormInput' minLength={`8`} maxLength={`20`} onChange={newPassHandler}></input>
                <input type='password' placeholder='Password Confirmation' className='FormInput' minLength={`8`} maxLength={`20`} onChange={confirmPassHandler}></input>
                <ErrorMessageCannotEmpty className={errorPassword}>{messageError}</ErrorMessageCannotEmpty>
                <BorderRegister className='ButtonDaftarHover'>
                        <button type='submit' className='ButtonSubmit'>Change</button>
                </BorderRegister>
            </form>
        </BorderFormChangePass>
    )
}
