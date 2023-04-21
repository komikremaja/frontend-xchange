import styled from "styled-components";

export const BorderLogin = styled.div`
    background-color: white;
    display:flex;
    width: 100%;
    height: 100%;
`

export const BorderKiri = styled.div`
    background-color: white;
    width:60%;
`

export const BorderKanan = styled.div`
    border: 1px blue solid;
    width:40%;
`

export const BorderInKiri = styled.div`
height: 90%;
margin: 30px;
background-image: url(${props => props.Image});
background-repeat: no-repeat;
background-size: cover;
`

export const BorderButtonBack = styled.div`
    cursor: pointer;
    height: 70px;
    width: 70px;
    display: flex;
    border-radius: 50px;
    align-items: center;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
    justify-content: center;
    background-image: url(${props => props.Image});
    background-repeat: no-repeat;
    background-size: cover;
`

export const TextTitleKiri = styled.div`
text-align: center;
height: 10%;
margin-top: 30px;
font-family: 'Habibi';
font-style: normal;
font-weight: 400;
font-size: 40px;
line-height: 50px;
color: #40A6C6;
`
export const BorderInKanan = styled.div`
height: 90%;
margin: 30px;
`