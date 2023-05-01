import React, { useEffect, useState } from 'react'
import { ButtonUpdate, ContainerDescriptionKurs, ContainerKursBank, ContentExchangeContainer, DescriptionFirstKursText, DescriptionKursText, DescriptionTextContent, FormExchangeContainer } from '../../Styles/Exchange/ExchangeStyledComponent'
import buttonUpdate from '../../Assets/Vector.png';

import KursBank from '../Exchange/KursBank';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { KursSpecific } from '../../Services/KursService';
import FormTransactionExchange from './FormTransactionExchange';

export default function FormExchange(props) {
    const { currentPage, subTitle } = props;
    const [time, setTime] = useState(new Date());
    const [inquiryKurs, setInquiryKurs] = useState(false);
    const [showDescriptionKurs, setShowDescriptionKurs] = useState();
    const [showDescriptionExchange, setShowDescriptionExchange] = useState();

    const [kursBCA, setKursBCA] = useState();
    const [kursBRI, setKursBRI] = useState();
    const [kursMandiri, setKursMandiri] = useState();

    const userCookie = Cookies.get('user');
    const cookieExpired = Cookies.get('expires');
    const user = userCookie ? JSON.parse(userCookie) : null;
    const navigate = useNavigate();

    useEffect(() => {
        if (currentPage !== "Kurs") {
            setShowDescriptionKurs('hideDescription');
        } else {
            setShowDescriptionExchange('hideDescription');
        }
        console.log(currentPage);
        if (!user || !user.accessToken) {
            navigate("/user/login");
        } else {
            const tokenExpirationTime = new Date(cookieExpired);
            const currentTime = new Date();
            if (currentTime > tokenExpirationTime) {
                Cookies.remove('user');
                Cookies.remove('expires');
                navigate("/user/login");
            }
        }
        const handleClick = () => {
            if (!user || !user.accessToken) {
                navigate("/user/login");
            } else {
                const tokenExpirationTime = new Date(cookieExpired);
                const currentTime = new Date();
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


    const updateTime = () => {
        setTime(new Date());
    };

    const formatTime = (time) => {
        const hours = time.getHours().toString().padStart(2, '0');
        const minutes = time.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    function updateKurs() {
        inquirySpecificDiagram();
        updateTime();
    }

    const inquirySpecificDiagram = async () => {
        let responseInquiryKursBCA = await KursSpecific("BCA");
        let responseInquiryKursBRI = await KursSpecific("BRI");
        let responseInquiryKursMandiri = await KursSpecific("Mandiri");
        setKursBCA(responseInquiryKursBCA.data);
        setKursBRI(responseInquiryKursBRI.data);
        setKursMandiri(responseInquiryKursMandiri.data);

    }

    useEffect(() => {
        inquirySpecificDiagram();

    }, []);

    return (
        <ContentExchangeContainer>
            <ContainerDescriptionKurs>
                <DescriptionTextContent>
                    {subTitle}
                </DescriptionTextContent>
                {/* Description untuk page kurs rate */}
                <DescriptionFirstKursText className={showDescriptionKurs}>
                    Kurs Jual dan beli dari sisi bank.
                </DescriptionFirstKursText>
                <DescriptionKursText className={showDescriptionKurs}>
                    Kurs Jual dan beli dari sisi bank.
                    Updated {formatTime(time)} WIB
                    <ButtonUpdate><img src={buttonUpdate} alt="button update" onClick={updateKurs} /></ButtonUpdate>
                </DescriptionKursText>
            </ContainerDescriptionKurs>
            {/* Description untuk page kurs rate */}
            <DescriptionKursText className={showDescriptionExchange}>
                Masukan Detail transaksi valas yang anda inginkan.
            </DescriptionKursText>
            {/* Kurs Bank */}
            <KursBank currentPage={currentPage} inquiryKurs={inquiryKurs} kursBCA={kursBCA} kursBRI={kursBRI} kursMandiri={kursMandiri} />
            <FormTransactionExchange currentPage={currentPage} />

        </ContentExchangeContainer>
    )
}
