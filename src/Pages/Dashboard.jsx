import React, { useEffect } from 'react'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const userCookie = Cookies.get('user');
    const user = userCookie ? JSON.parse(userCookie) : null;
    const navigate = useNavigate();

    useEffect(() => {
        if (!user || !user.accessToken) {
            navigate("/user/login");
        } else {
            const tokenExpirationTime = new Date(user.tokenExpirationTime);
            const currentTime = new Date();
            if (currentTime > tokenExpirationTime) {
                Cookies.remove('user');
                navigate("/user/login");
            }
        }

    }, []);
    return (
        <div>Dashboard</div>
    )
}
