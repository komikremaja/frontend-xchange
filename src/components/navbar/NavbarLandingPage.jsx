import React from 'react'
import { BorderInNavbar, BorderLoginAndRegister, BorderLogoNavbar, BorderMenuNavbar, BorderNavbar, MenuNavbar, NameLogo, SeperateAuth, TextAuth } from '../../Styles/NavbarStyle/StyledNavbarLandingPage'
import logoXchange from "../../Assets/LogoWeb-removebg-preview.png";
import "../../Styles/LandingPageStyle/styledLandingPagesCss.css";

const NavbarLandingPage = (props) => {
  const { menu1, menu2, menu3, menu4 } = props;
  return (
      <BorderNavbar>
        <BorderInNavbar>

          {/* border logo navbar */}
          <BorderLogoNavbar>
            <img src={logoXchange} alt="Logo X Change" className='sizeLogo'/>
            <NameLogo>
              Change
            </NameLogo>
          </BorderLogoNavbar>
          {/* border logo navbar */}

          {/* Menu Navbar */}
          <BorderMenuNavbar>
            <MenuNavbar>
              {menu1}
            </MenuNavbar>
            <MenuNavbar>
              {menu2}
            </MenuNavbar>
            <MenuNavbar>
              {menu3}
            </MenuNavbar>
            <MenuNavbar>
              {menu4}
            </MenuNavbar>
          </BorderMenuNavbar>
          {/* Menu Navbar */}
          <BorderLoginAndRegister>
            <TextAuth>
              Login
            </TextAuth>
            <SeperateAuth>
              |
            </SeperateAuth>
            <TextAuth>
              Register
            </TextAuth>
          </BorderLoginAndRegister>
        </BorderInNavbar>
      </BorderNavbar>
  )
}

export default NavbarLandingPage
