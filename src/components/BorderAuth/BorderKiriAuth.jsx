import React from 'react'
import { BorderButtonBack, BorderInKiri, BorderKiri, TextTitleKiri } from '../../Styles/LoginStyle/LoginStyleComponent'
import leftImageBg from '../../Assets/BackgroundLogin.png';
import backImage from '../../Assets/TandaPanahBack.png';
import { Link } from 'react-router-dom';

const BorderKiriAuth = (props) => {
    const { title } = props;
    return (
        <BorderKiri>
            <BorderInKiri Image={leftImageBg}>
                <Link to={`/`}>
                    <BorderButtonBack Image={backImage}>
                    </BorderButtonBack>
                </Link>
                <TextTitleKiri>
                    {title}
                </TextTitleKiri>
            </BorderInKiri>
        </BorderKiri>
    )
}

export default BorderKiriAuth
