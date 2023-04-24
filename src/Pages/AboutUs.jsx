import React from 'react'
import { BodyLandingPage } from '../Styles/LandingPageStyle/styledLandingPage'
import NavbarLandingPage from '../components/navbar/NavbarLandingPage'
import { BorderBankContent, BorderBankInContent, BorderContentAboutUs, BorderKursBank, BorderTitleBankContent, ContentImageAtas, KursBankAboutUs, LogoBank, NameBank, SecondContentAboutUs, SecondContentBorderTitleAboutUs, SecondContentDescriptionAboutUs, TitleContentAboutUs } from '../Styles/AboutUs/AboutUsStyleComponent'
import '../Styles/AboutUs/AboutUsStyleCss.css';
import logoBca from '../Assets/LogoBCA.png';
import logoBRI from '../Assets/LogoBRI.png';
import logoMandiri from '../Assets/LogoMandiri.png';
import BottomBarPage from '../components/BottomBar/BottomBarPage';


export default function AboutUs() {
  return (
    <BodyLandingPage>
      <NavbarLandingPage menu1="Home" menu2="AboutUs" menu3="Help" menu4="FAQ" />
      <BorderContentAboutUs>
        <ContentImageAtas>
          <TitleContentAboutUs>
            CURIOUS ABOUT US?
          </TitleContentAboutUs>
          <TitleContentAboutUs>
            <span className='LetsRoll'>Lets Roll!</span>
          </TitleContentAboutUs>
        </ContentImageAtas>
      </BorderContentAboutUs>
      <SecondContentAboutUs>
        <SecondContentBorderTitleAboutUs>
          <TitleContentAboutUs>
            <span className='StyleTitleContent'>We are a XChanger</span>
          </TitleContentAboutUs>
          <SecondContentDescriptionAboutUs>
            We provide features for exchanging foreign currency with several major banks in Indonesia
          </SecondContentDescriptionAboutUs>
        </SecondContentBorderTitleAboutUs>
        <SecondContentDescriptionAboutUs>
          <TitleContentAboutUs>
            <span className='StyleTitleContent'>Banks work with us.</span>
          </TitleContentAboutUs>
          <BorderBankContent>
            <BorderBankInContent>
              <BorderTitleBankContent>
                <LogoBank image={logoBca}/>
                <NameBank>Bank Central Asia</NameBank>
              </BorderTitleBankContent>
              {/* Kurs available */}
              <BorderKursBank>
                <KursBankAboutUs>
                  USD/IDR
                </KursBankAboutUs>
                <KursBankAboutUs>
                  SGD/IDR
                </KursBankAboutUs>
                <KursBankAboutUs>
                  EUR/IDR
                </KursBankAboutUs>
                <KursBankAboutUs>
                  AUD/IDR
                </KursBankAboutUs>
              </BorderKursBank>
            </BorderBankInContent>
            <BorderBankInContent>
              <BorderTitleBankContent>
                <LogoBank image={logoBRI}/>
                <NameBank>Bank Rakyat Indonesia</NameBank>
              </BorderTitleBankContent>
               {/* Kurs available */}
               <BorderKursBank>
                <KursBankAboutUs>
                  USD/IDR
                </KursBankAboutUs>
                <KursBankAboutUs>
                  SGD/IDR
                </KursBankAboutUs>
                <KursBankAboutUs>
                  EUR/IDR
                </KursBankAboutUs>
                <KursBankAboutUs>
                  AUD/IDR
                </KursBankAboutUs>
              </BorderKursBank>
            </BorderBankInContent>
            <BorderBankInContent>
              <BorderTitleBankContent>
                <LogoBank image={logoMandiri}/>
                <NameBank>Bank Mandiri</NameBank>
              </BorderTitleBankContent>
               {/* Kurs available */}
               <BorderKursBank>
                <KursBankAboutUs>
                  USD/IDR
                </KursBankAboutUs>
                <KursBankAboutUs>
                  SGD/IDR
                </KursBankAboutUs>
                <KursBankAboutUs>
                  EUR/IDR
                </KursBankAboutUs>
                <KursBankAboutUs>
                  AUD/IDR
                </KursBankAboutUs>
              </BorderKursBank>
            </BorderBankInContent>
          </BorderBankContent>
        </SecondContentDescriptionAboutUs>
      </SecondContentAboutUs>
      {/* Bottom navbar */}
      <BottomBarPage/>
    </BodyLandingPage>
  )
}
