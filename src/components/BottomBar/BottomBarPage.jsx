import React from 'react'
import { BorderBottomBar, BorderInBottomBar, ContentBottomBar, ImageOjk } from '../../Styles/BottomBarStyle/BottomBarStyleComponent'
import ojk from '../../Assets/OJK.png';
import '../../Styles/BottomBarStyle/BottomBarStyleCss.css';

export default function BottomBarPage() {
    return (
        <BorderBottomBar>
            <BorderInBottomBar>
                <ContentBottomBar>
                Contact: XchangerCorp@gmail.com
                </ContentBottomBar>
                <img src={ojk} alt="OJK" className='imageOjk'/>
                <ContentBottomBar>
                Phone: 021-3411-1688
                </ContentBottomBar>
            </BorderInBottomBar>
        </BorderBottomBar>
    )
}
