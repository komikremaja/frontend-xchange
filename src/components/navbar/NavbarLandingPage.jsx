import React from 'react'
import { BorderInNavbar, BorderLoginAndRegister, BorderLogoNavbar, BorderMenuNavbar, BorderNavbar, MenuNavbar, NameLogo, SeperateAuth, TextAuth } from '../../Styles/NavbarStyle/StyledNavbarLandingPage'
import logoXchange from "../../Assets/LogoWeb-removebg-preview.png";
import "../../Styles/LandingPageStyle/styledLandingPagesCss.css";
import { Link } from 'react-router-dom';

const NavbarLandingPage = (props) => {
  const { menu1, menu2, menu3, menu4 } = props;
  return (
    <BorderNavbar>
      <BorderInNavbar>

        {/* border logo navbar */}
        <Link to={`/`}>
          <BorderLogoNavbar>
            <img src={logoXchange} alt="Logo X Change" className='sizeLogo' />
            <NameLogo>
              Change
            </NameLogo>
          </BorderLogoNavbar>
        </Link>
        {/* border logo navbar */}

        {/* Menu Navbar */}
        <BorderMenuNavbar>
          <Link to={`/`}>
            <MenuNavbar>
              {menu1}
            </MenuNavbar>
          </Link>
          <Link to={`/user/about-us`}>
            <MenuNavbar>
              {menu2}
            </MenuNavbar>
          </Link>
          <MenuNavbar>
            {menu3}
          </MenuNavbar>
          <MenuNavbar>
            {menu4}
          </MenuNavbar>
        </BorderMenuNavbar>
        {/* Menu Navbar */}
        <BorderLoginAndRegister>
          <Link to={`/user/login`}>
            <TextAuth>
              Login
            </TextAuth>
          </Link>
          <SeperateAuth>
            |
          </SeperateAuth>
          <Link to={`/user/register`}>
            <TextAuth>
              Register
            </TextAuth>
          </Link>
        </BorderLoginAndRegister>
      </BorderInNavbar>
    </BorderNavbar>
  )
}

export default NavbarLandingPage
