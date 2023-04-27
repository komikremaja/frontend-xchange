import React from 'react'
import { BorderInNavbar, BorderLogoNavbar, BorderMenuNavbar, BorderNavbar, MenuNavbar, NameLogo, TextAuth } from '../../Styles/NavbarStyle/StyledNavbarLandingPage'
import logoXchange from '../../Assets/LogoWeb-removebg-preview.png';
import { Link, useNavigate } from 'react-router-dom';
import { BorderTextNameCustomer } from '../../Styles/Dashboard/DashboardStyleComponent';
import Cookies from 'js-cookie';

const NavbarDashBoard = (props) => {
    
  const { menu1, menu2, menu3, menu4} = props;
  const navigate = useNavigate();

  function logoutHandler(){
    Cookies.remove('user');
    Cookies.remove('expires');
    navigate("/");
  }
    return (
        <BorderNavbar>
            <BorderInNavbar>
                {/* border logo navbar */}
                <Link to={`/dashboard`}>
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
                    <Link to={`/dashboard`}>
                        <MenuNavbar>
                            {menu1}
                        </MenuNavbar>
                    </Link>
                    <Link to={``}>
                        <MenuNavbar>
                            {menu2}
                        </MenuNavbar>
                    </Link>
                    <Link to={`/user/profile`}>
                        <MenuNavbar>
                            {menu3}
                        </MenuNavbar>
                    </Link>
                    <Link to={`/transaction/exchange`}>
                        <MenuNavbar>
                            {menu4}
                        </MenuNavbar>
                    </Link>
                </BorderMenuNavbar>
                {/* Menu Navbar */}
                <BorderTextNameCustomer>
                    <TextAuth onClick={logoutHandler}>
                       Logout
                    </TextAuth>
                </BorderTextNameCustomer>
            </BorderInNavbar>
        </BorderNavbar>
    )
}

export default NavbarDashBoard
