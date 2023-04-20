import React from 'react'
import { BorderBottomBar, BorderInBottomBar, ContentBottomBar, ImageOjk } from '../../Styles/BottomBarStyle/BottomBarStyleComponent'
import ojk from '../../Assets/OJK.png';
import '../../Styles/BottomBarStyle/BottomBarStyleCss.css';

export default function BottomBarPage() {
    return (
        <BorderBottomBar>
            <BorderInBottomBar>
                <ContentBottomBar>
                Contact: Xchange@gmail.com
                </ContentBottomBar>
                <img src={ojk} alt="OJK" className='imageOjk'/>
                <ContentBottomBar>
                Contact: Xchange@gmail.com
                </ContentBottomBar>
            </BorderInBottomBar>
        </BorderBottomBar>
    )
}
