import React from 'react'
import { BorderButtonBack, BorderInKiri, BorderKiri, TextTitleKiri } from '../../Styles/LoginStyle/LoginStyleComponent'
import leftImageBg from '../../Assets/BackgroundLogin.png';
import backImage from '../../Assets/TandaPanahBack.png';

const BorderKiriAuth = (props) => {
    const {title} = props;
    return (
        <BorderKiri>
            <BorderInKiri Image={leftImageBg}>
                <BorderButtonBack Image={backImage}>
                </BorderButtonBack>
                <TextTitleKiri>
                    {title}
                </TextTitleKiri>
            </BorderInKiri>
        </BorderKiri>
    )
}

export default BorderKiriAuth
