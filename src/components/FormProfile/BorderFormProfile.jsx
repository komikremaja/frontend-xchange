import React, { useEffect, useState } from 'react'
import { FormProfileContainer, FormProfileInContainer } from '../../Styles/FormProfile/FormProfileStyledComponent'
import FormInputProfile from './FormInputProfile'
import { BorderButtonBack } from '../../Styles/LoginStyle/LoginStyleComponent'
import backImage from '../../Assets/TandaPanahBack.png';
import '../../Styles/FormProfile/FormProfileStyleCss.css'

export default function BorderFormProfile(props) {
    let { currentAction, isShow } = props;
    const [show, setShow] = useState(isShow === undefined ? false : true);
    const [hide, setHide] = useState('');

    useEffect(() => {

        const interval = setInterval(() => {
            // Update myState every 30 seconds

            console.log(show);
        }, 500);
        return () => clearInterval(interval);
    });
    
    function backAction() {
        isShow = !isShow;
        setShow(!show);
    }
    return (
        <FormProfileContainer className={show ? 'showForm' : 'hide'}>
            <FormProfileInContainer>
                <BorderButtonBack Image={backImage} className='customBack' onClick={backAction}>
                </BorderButtonBack>
                <FormInputProfile />
            </FormProfileInContainer>
        </FormProfileContainer>
    )
}
