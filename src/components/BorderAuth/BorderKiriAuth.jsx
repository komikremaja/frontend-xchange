import React from 'react'
import { BorderButtonBack, BorderInKiri, BorderKiri, TextTitleKiri } from '../../Styles/LoginStyle/LoginStyleComponent'
import leftImageBg from '../../Assets/BackgroundLogin.png';
import backImage from '../../Assets/TandaPanahBack.png';
import { Link } from 'react-router-dom';
import '../../Styles/index.css'

const BorderKiriAuth = (props) => {
    const { title } = props;
    return (
        <BorderKiri>
            <BorderInKiri Image={leftImageBg}>
                <BorderButtonBack Image={backImage}>
                    <Link to={`/`} className='LinkBack'>
                        <div></div>
                    </Link>
                </BorderButtonBack>
                <TextTitleKiri>
                    {title}
                </TextTitleKiri>
            </BorderInKiri>
        </BorderKiri>
    )
}

export default BorderKiriAuth
