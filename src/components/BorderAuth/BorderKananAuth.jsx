import React, { useState } from 'react'
import { BorderInKanan, BorderKanan } from '../../Styles/LoginStyle/LoginStyleComponent'
import FormLogin from '../FormAuth/FormLogin'
import '../../Styles/FormLogin/FormLoginStyleCss.css'
import FormRegister from '../FormAuth/FormRegister'
import FormSuccessRegister from '../FormAuth/FormSuccessRegister'

const BorderKananAuth = (props) => {
    const {currPage} = props;
    const [pinForm, setPinForm] = useState();

    function handlePinForm(value){
        setPinForm(value);
        props.onChildChange(value);
    }

    function handleIdUser(value){
        props.onIdUser(value);
    }

    return (
        <BorderKanan>
            <BorderInKanan>
                <FormLogin isHide={currPage}/>
                <FormRegister isHide={currPage} onChildChange={handlePinForm} onIdUser={handleIdUser}/>
                <FormSuccessRegister isHide={currPage}/>
            </BorderInKanan>
        </BorderKanan>
    )
}

export default BorderKananAuth
