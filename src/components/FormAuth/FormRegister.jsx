import React, { useState } from 'react'
import { BorderForm, BorderInForm, BorderRegister, BorderSubmit, TitleForm } from '../../Styles/FormLogin/FormLoginStyleComponent'
import '../../Styles/FormRegister/FormRegisterStyleCss.css'
import { RegisterService } from '../../Services/RegisterService';
import { useNavigate } from 'react-router-dom';
import { ErrorMessageCannotEmpty } from '../../Styles/FormRegister/FormSuccessRegisterStyledComponent';
import FormCreatePin from './FormCreatePin';

const FormRegister = (props) => {
    const [email, setEmail] = useState();
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [first_name, setFirstName] = useState();
    const [last_name, setLastName] = useState();
    const [phone_number, setPhoneNumber] = useState();
    const [emailEmpty, setEmailEmpty] = useState();
    const [emailError, setEmailError] = useState();
    const [emailExist, setEmailExist] = useState();
    const [passwordEmpty, setPasswordEmpty] = useState();
    const [usernameEmpty, setUsernameEmpty] = useState();
    const [firstNameEmpty, setFirstNameEmpty] = useState();
    const [lastNameEmpty, setLastNameEmpty] = useState();
    const [phoneNumberEmpty, setPhoneNumberEmpty] = useState();
    const [lastNameInvalid, setLastNameInvalid] = useState();
    const [firstNameInvalid, setFirstNameInvalid] = useState();
    const [idUser, setIdUser] = useState();
    const [messageErrorShow, setMessageErrorShow] = useState();
    const [messageError, setMessageError] = useState();


    const navigate = useNavigate();

    const { isHide } = props;

    if (isHide !== 'Register') {
        return (
            <div></div>
        )
    }

    const register = async () => {
        const data = {
            email,
            username,
            password,
            first_name,
            last_name,
            phone_number
        }
        const responseRegister = await RegisterService(data);
        console.log("Response Register", responseRegister.data);

        if (responseRegister.data.status === 400) {
            setMessageErrorShow("ShowDisplay");
            setMessageError(responseRegister.data.message);
        }
        if (responseRegister.data.message === "Email sudah terdaftar") {
            setEmailExist("ShowDisplay");
            setEmailError(responseRegister.data.message);
        }
        if (responseRegister.data.message === "FirstName or LastName not valid format") {
            setFirstNameInvalid("ShowDisplay");
            setLastNameInvalid("ShowDisplay");
        }
        //navigate if success
        if (responseRegister.data.status === 201) {
            props.onChildChange("ShowDisplay");
            console.log("Id user in register form: ", responseRegister.data.data.additionalData);
            setIdUser(responseRegister.data.data.additionalData);
            props.onIdUser(responseRegister.data.data.additionalData);
        }

    }

    function inputHandlerEmail(e) {
        setEmail(e.target.value);
        setEmailEmpty("");
        setEmailExist("");
    }
    function inputHandlerUsername(e) {
        setUsernameEmpty("");
        setUserName(e.target.value);
    }
    function inputHandlerPassword(e) {
        setPassword(e.target.value);
        setPasswordEmpty("");
    }
    function inputHandlerFirstName(e) {
        setFirstNameEmpty("");
        setFirstName(e.target.value);
        setFirstNameInvalid("");
    }
    function inputHandlerLastName(e) {
        setLastNameEmpty("");
        setLastName(e.target.value);
        setLastNameInvalid("");
    }
    function inputHandlerPhoneNumber(e) {
        setPhoneNumberEmpty("");
        setPhoneNumber(e.target.value);
    }

    function validationEmail() {
        if (email == undefined || email == '') {
            setEmailEmpty("ShowDisplay");
        }
    }

    function validationUsername() {
        if (username == undefined || username == '') {
            setUsernameEmpty("ShowDisplay");
        }
    }

    function validationPassword() {
        if (password == undefined || password == '') {
            setPasswordEmpty("ShowDisplay");
        }
    }

    function validationFirstName() {
        if (first_name == undefined || first_name == '') {
            setFirstNameEmpty("ShowDisplay");
        }
    }

    function validationLastName() {
        if (last_name == undefined || last_name == '') {
            setLastNameEmpty("ShowDisplay");
        }
    }

    function validationPhoneNumber() {
        if (phone_number == undefined || phone_number == '') {
            setPhoneNumberEmpty("ShowDisplay");
        }
    }

    const submitForm = (e) => {
        e.preventDefault();
        validationEmail();
        validationUsername();
        validationPassword();
        validationFirstName();
        validationLastName();
        validationPhoneNumber();
        register();
        console.log("Email: ", email);
        console.log("Username: ", username);
        console.log("Password: ", password);
        console.log("FirstName: ", first_name);
        console.log("LastName: ", last_name);
        console.log("PhoneNumber: ", phone_number);
    }

    return (
        <BorderForm >
            <TitleForm>
                Register
            </TitleForm>
            <BorderInForm>
                <form action="POST" onSubmit={submitForm}>
                    <ErrorMessageCannotEmpty className={emailEmpty}>Email tidak boleh kosong</ErrorMessageCannotEmpty>
                    <ErrorMessageCannotEmpty className={emailExist}>{emailError}</ErrorMessageCannotEmpty>
                    <input type='email' placeholder='Email' className='FormInput' onInput={inputHandlerEmail} minLength={`1`}></input>
                    <ErrorMessageCannotEmpty className={usernameEmpty}>Username tidak boleh kosong</ErrorMessageCannotEmpty>
                    <input type='text' placeholder='Username' className='FormInput' onInput={inputHandlerUsername} minLength={`6`} maxLength={`12`}></input>
                    <ErrorMessageCannotEmpty className={passwordEmpty}>Password tidak boleh kosong</ErrorMessageCannotEmpty>
                    <input type='password' placeholder='Password' className='FormInput' onInput={inputHandlerPassword} minLength={`8`} maxLength={`20`}></input>
                    <ErrorMessageCannotEmpty className={firstNameEmpty}>First Name tidak boleh kosong</ErrorMessageCannotEmpty>
                    <ErrorMessageCannotEmpty className={firstNameInvalid}>First Name tidak valid</ErrorMessageCannotEmpty>
                    <input type='text' placeholder='FirstName' className='FormInput' onInput={inputHandlerFirstName} minLength={`1`} maxLength={`30`}></input>
                    <ErrorMessageCannotEmpty className={lastNameEmpty}>Last Name tidak boleh kosong</ErrorMessageCannotEmpty>
                    <ErrorMessageCannotEmpty className={lastNameInvalid}>Last Name tidak valid</ErrorMessageCannotEmpty>
                    <input type='text' placeholder='LastName' className='FormInput' onInput={inputHandlerLastName} minLength={`1`} maxLength={`30`}></input>
                    <ErrorMessageCannotEmpty className={phoneNumberEmpty}>Phone Number tidak boleh kosong</ErrorMessageCannotEmpty>
                    <input type='number' placeholder='PhoneNumber' className='FormInput' onInput={inputHandlerPhoneNumber} minLength={`5`} maxLength={`15`}></input>
                    <ErrorMessageCannotEmpty className={messageErrorShow}>{messageError}</ErrorMessageCannotEmpty>
                    <BorderRegister className='ButtonDaftarHover'>
                        <button type='submit' className='ButtonSubmit'>Daftar</button>
                    </BorderRegister>
                </form>
            </BorderInForm>
        </BorderForm>
    )
}

export default FormRegister