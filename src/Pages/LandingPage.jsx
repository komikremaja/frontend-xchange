import React, { useState } from 'react'
import NavbarLandingPage from '../components/navbar/NavbarLandingPage'
import backgroundLandingPage from '../Assets/bgLandingPage.jpg'
import fastImage from '../Assets/Fast.png';
import safeImage from '../Assets/Safe.png';
import "../Styles/LandingPageStyle/styledLandingPagesCss.css";
import FairImage from '../Assets/Fair.png';
import { BodyLandingPage, BorderContent, BorderInSubContent, BorderLeftTextContent, BorderRightTextContent, BorderSubContent, ImageSubContent, MessageSubContent, NoteTitleLandingPage, PointLandingPage, SubTitleLandingPage, TextTitleSubContent, TitleLandingPage } from '../Styles/LandingPageStyle/styledLandingPage'


export default function LandingPage() {

    return (
        <BodyLandingPage>
            <NavbarLandingPage menu1="Home" menu2="AboutUs" menu3="Help" menu4="FAQ" />
            <BorderContent backgroundImage={backgroundLandingPage}>
                <BorderLeftTextContent>
                    <TitleLandingPage>
                        EASY TO
                    </TitleLandingPage>
                    <SubTitleLandingPage>
                        EXCHANGE
                    </SubTitleLandingPage>
                    <NoteTitleLandingPage>
                        Now you can to <span className='noteTitleCustomColor'>exchange your money</span> with this app with your any bank account
                    </NoteTitleLandingPage>
                </BorderLeftTextContent>
                <BorderRightTextContent>
                    <PointLandingPage>
                        <ol className='orderListPoint'>
                            <li>Trusted exchange money app</li>
                            <li>Can exchange money with any bank and free transfer fee</li>
                            <li>Exchange your money with adorable price</li>
                            <li>Collaborate with any major bank in Indonesia</li>
                        </ol>
                    </PointLandingPage>
                </BorderRightTextContent>
            </BorderContent>
            <BorderSubContent>

                <BorderInSubContent>
                    <TextTitleSubContent>
                        Fair
                    </TextTitleSubContent>
                    <ImageSubContent>
                        <img src={FairImage} alt="Fair Image" />
                    </ImageSubContent>
                    <MessageSubContent>
                        Fair with the price we gift to you
                    </MessageSubContent>
                </BorderInSubContent>

                <BorderInSubContent>
                    <TextTitleSubContent>
                        Fast
                    </TextTitleSubContent>
                    <ImageSubContent>
                        <img src={fastImage} alt="Fair Image" />
                    </ImageSubContent>
                    <MessageSubContent>
                    Fast transaction to exchange your money
                    </MessageSubContent>
                </BorderInSubContent>

                <BorderInSubContent>
                    <TextTitleSubContent>
                        Trusted
                    </TextTitleSubContent>
                    <ImageSubContent>
                        <img src={safeImage} alt="Fair Image" />
                    </ImageSubContent>
                    <MessageSubContent>
                        We always keep your data with very safety and responsible with your transaction 
                    </MessageSubContent>
                </BorderInSubContent>
            </BorderSubContent>
        </BodyLandingPage>
    )
}
