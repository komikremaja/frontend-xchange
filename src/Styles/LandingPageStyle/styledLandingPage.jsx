import styled from "styled-components";

export const BodyLandingPage = styled.div`
    background-color: rgb(235 235 235);
`
export const BorderContent = styled.div`
    height: 550px;
    background-image: url(${props => props.backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    display:flex;
    justify-content: space-evenly;
`

export const BorderLeftTextContent = styled.div`
    margin-top: 60px;
    height: 35%;
    width: 35%;
`
export const BorderRightTextContent = styled.div`
    margin-top: 60px;
    height: 35%;
    width: 35%;
`

export const TitleLandingPage = styled.div`
    font-family: 'Habibi';
    height: 50px;
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 50px;
    color: #479DC2;
`

export const SubTitleLandingPage = styled.div`
    font-family: 'Habibi';
    height: 50px;
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 50px;
    color: #24BA45;
`

export const NoteTitleLandingPage = styled.div`
    height: 65px;
    width: 90%;
    font-family: 'Habibi';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 32px;
    color: #070708;
`

export const PointLandingPage = styled.div`
    font-family: 'Habibi';
    font-style: normal;
    font-size: 25px;
`

export const BorderSubContent = styled.div`
    display:flex;
    justify-content: space-evenly;
`

export const BorderInSubContent = styled.div`
    height: 500px;
    background: white;
    border: 1px solid white;
    width: 450px;
    margin: 40px 20px;
    padding: 40px;
    box-shadow: rgba(1, 1, 1, 0.05) 4px 4px 4px;
    border-radius: 20px;
`

export const TextTitleSubContent = styled.div`
    font-family: Habibi;
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    height: 20%;
    line-height: 50px;
    justify-content: center;
    display: flex;
    color: rgb(0, 0, 0);
    text-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
`
export const ImageSubContent = styled.div`
    font-family: Habibi;
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    height: 30%;
    line-height: 50px;
    justify-content: center;
    display: flex;
    color: rgb(0, 0, 0);
    text-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
`
export const MessageSubContent = styled.div`
    font-family: 'Habibi';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 40px;
    color: #000000;
    height: 30%;
    line-height: 50px;
    width: 100%;
    text-align: center;
    text-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
`
