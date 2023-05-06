import React, { useEffect, useState } from 'react'
import { BodyDashboard } from '../Styles/Dashboard/DashboardStyleComponent'
import NavbarDashBoard from '../components/navbar/NavbarDashBoard'
import { BorderMultiAccount, BorderTextEdit, FieldBorder, FieldContainer, FieldInContainer, ProfileContainer, ProfileInContainer, SpaceFieldAndValue, TextEdit, TitleProfile, ValueProfile } from '../Styles/Profile/ProfileStyledComponent'
import '../Styles/Profile/ProfileStyleCss.css';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { InquiryUser } from '../Services/RegisterService';
import BorderFormProfile from '../components/FormProfile/BorderFormProfile';
import '../Styles/FormProfile/FormProfileStyleCss.css';
import { FormProfileContainer, FormProfileInContainer } from '../Styles/FormProfile/FormProfileStyledComponent';
import { BorderButtonBack } from '../Styles/LoginStyle/LoginStyleComponent';
import FormInputProfile from '../components/FormProfile/FormInputProfile';
import backImage from '../Assets/TandaPanahBack.png';
import BottomBarPage from '../components/BottomBar/BottomBarPage';

export default function Profile() {

    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [npwp, setNpwp] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [multiAccount, setMultiAccount] = useState([]);
    const [listAccountCustomer, setListAccountCustomer] = useState('');
    const [formShow, setFormShow] = useState('');
    const [currentAction, setCurrentAction] = useState('');

    const navigate = useNavigate();

    const userCookie = Cookies.get('user');
    const cookieExpired = Cookies.get('expires');
    const user = userCookie ? JSON.parse(userCookie) : null;

    const inquiryUser = async () => {
        const responseInquiryUser = await InquiryUser(user.email); 
        console.log(responseInquiryUser);
        setUsername(responseInquiryUser.data.data.userName);
        setFirstName(responseInquiryUser.data.data.userDetail.firstName);
        setLastName(responseInquiryUser.data.data.userDetail.lastName);
        setPhoneNumber(responseInquiryUser.data.data.userDetail.phoneNumber);
        setMultiAccount(responseInquiryUser.data.data.userAccount);
        setNpwp(responseInquiryUser.data.data.userDetail.npwp);
        if (responseInquiryUser.data.status === 200 && multiAccount !== null) {
            mappingMultiAccount(multiAccount);
        }
    }

    function mappingMultiAccount(e) {
        let listDataAccount = [];
        let listObjAccount = {};

        e.forEach(data => {
            listObjAccount = data.accountNumber + "- " + data.bankType + "- " + data.typeAccount + ", ";
            console.log(listObjAccount);
            listDataAccount.push(listObjAccount);
        })
        setListAccountCustomer(listDataAccount);
        console.log(listDataAccount);
    }

    useEffect(() => {
        if (!user || !user.accessToken) {
            navigate("/user/login");
        } else {
            setEmail(user.email);
            const tokenExpirationTime = new Date(cookieExpired);
            const currentTime = new Date();
            console.log("Token Expired Time: ", tokenExpirationTime);
            if (currentTime > tokenExpirationTime) {
                Cookies.remove('user');
                Cookies.remove('expires');
                navigate("/user/login");
            }
        }

        inquiryUser();
        const handleClick = () => {
            if (!user || !user.accessToken) {
                navigate("/user/login");
            } else {
                const tokenExpirationTime = new Date(cookieExpired);
                const currentTime = new Date();
                console.log("Token Expired Time: ", tokenExpirationTime);
                if (currentTime > tokenExpirationTime) {
                    Cookies.remove('user');
                    Cookies.remove('expires');
                    navigate("/user/login");
                }
            }
        };
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };

    }, []);

    useEffect(() => {

        const interval = setInterval(() => {
            // Update myState every 30 seconds
            if (listAccountCustomer.length === 0) {
                inquiryUser();
            }
        }, 500);
        return () => clearInterval(interval);
    });

    function addHandleButton() {
        setFormShow(true);
        console.log(formShow);
        setCurrentAction("Add");
    }

    function addNpwpHandleButton() {
        setFormShow(true);
        console.log(formShow);
        setCurrentAction("Add Npwp");
    }

    function editHandleButton() {
        setFormShow(true);
        console.log(formShow);
        setCurrentAction("Edit");
    }

    function backAction() {
        setFormShow(false);
    }

    return (
        <BodyDashboard>
            <FormProfileContainer className={formShow ? 'showForm' : 'hide'}>
                <FormProfileInContainer>
                    <BorderButtonBack Image={backImage} className='customBack' onClick={backAction}>
                    </BorderButtonBack>
                    <FormInputProfile currentAction={currentAction} email={user.email} />
                </FormProfileInContainer>
            </FormProfileContainer>
            {/* <BorderFormProfile isShow={formShow} currentAction={currentAction} /> */}
            <NavbarDashBoard menu1="Dashboard" menu2="History" menu3="Profile" menu4="Exchange" />
            <ProfileContainer>
                <ProfileInContainer>
                    <TitleProfile>Welcome</TitleProfile>
                    <TitleProfile>
                        {firstName} {lastName}
                    </TitleProfile>
                    <FieldContainer>
                        <FieldInContainer>
                            <FieldBorder> Username </FieldBorder>
                            <ValueProfile>{username}</ValueProfile>
                            <BorderTextEdit onClick={addHandleButton}>
                                <TextEdit className='buttonAdd' >Add</TextEdit>
                            </BorderTextEdit>
                        </FieldInContainer>
                        <FieldInContainer>
                            <FieldBorder> First Name </FieldBorder>
                            <ValueProfile>{firstName}</ValueProfile>
                            <BorderTextEdit onClick={editHandleButton}>
                                <TextEdit className='buttonEdit'>Edit</TextEdit>
                            </BorderTextEdit>
                        </FieldInContainer>
                        <FieldInContainer>
                            <FieldBorder> Last Name </FieldBorder>
                            <ValueProfile>{lastName}</ValueProfile>

                        </FieldInContainer>
                        <FieldInContainer>
                            <FieldBorder> Phone Number </FieldBorder>
                            <ValueProfile>{phoneNumber}</ValueProfile>

                        </FieldInContainer>
                        <FieldInContainer>
                            <FieldBorder> Email </FieldBorder>
                            <ValueProfile>{user.email}</ValueProfile>

                        </FieldInContainer>
                        <FieldInContainer>
                            <FieldBorder> Account Info </FieldBorder>
                            <BorderMultiAccount>
                                {listAccountCustomer ? listAccountCustomer : "ACCOUNT BANK EMPTY"}
                            </BorderMultiAccount>

                        </FieldInContainer>

                        <FieldInContainer>
                            <FieldBorder> NPWP </FieldBorder>
                            <ValueProfile>{npwp ? npwp : "NPWP EMPTY"}</ValueProfile>
                            <BorderTextEdit onClick={addNpwpHandleButton}>
                                <TextEdit className='buttonAdd' >Add</TextEdit>
                            </BorderTextEdit>
                        </FieldInContainer>
                    </FieldContainer>
                </ProfileInContainer>
            </ProfileContainer>
            <BottomBarPage/>
        </BodyDashboard>
    )
}
