import styled from "styled-components";

export const BorderNavbar = styled.div`
    height: 100px;
    background-color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
    padding: 10px 120px;
`
export const BorderInNavbar = styled.div`
    height:100%;
    display: flex;
    align-items: center;
    justify-content: start;
`

export const BorderLogoNavbar = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const NameLogo = styled.span`
    font-family: 'Habibi';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 50px;
    display:flex;
    align-items:center;
    color: rgba(85, 170, 206, 0.88);

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const BorderMenuNavbar = styled.div`
width: 60%;
display: flex;
justify-content: space-evenly;
`

export const MenuNavbar = styled.div`
font-family: 'Habibi';
font-style: normal;
font-weight: 400;
font-size: 25px;
color: #479DC2;
display: flex;
align-items: center;
cursor: pointer;
`

export const BorderLoginAndRegister = styled.div`
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const TextAuth = styled.div`
    font-family: 'Habibi';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #479DC2;
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const SeperateAuth = styled.div`
    font-family: 'Habibi';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #479DC2;
    display: flex;
    align-items: center;
    margin-left:5px;
    margin-right: 5px;
`