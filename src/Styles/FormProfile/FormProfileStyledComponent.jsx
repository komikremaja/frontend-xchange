import styled from "styled-components";

export const FormProfileContainer = styled.div`
    position: absolute;
    width: 100%;    
    height: 1110px;
    background: rgba(114, 114, 114, 0.44);
`

export const FormProfileInContainer = styled.div`
position: absolute;
width: 750px;
left: 380px;
top: 100px;
background-color: #e3e9ea;
box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 8px;
border-radius: 30px;
padding: 40px;
`

export const FormAddRekeningContainer = styled.div`
height: 100%;
`

export const TitleFormProfile = styled.div`
text-align:center;
font-size: 25px;
color: #29a9ce
`

export const FormProfileInputContainer = styled.div`
height: 90%;
margin-top: 20px;
`
export const FormAddRekeningInputContainer = styled.form`
display: flex;
justify-content: start;
align-items: center;
flex-direction: column;
`

export const ButtonSubmit = styled.div`
height: 70px;
font-size: 20px;
width: 200px;
color: white;
border-radius: 30px;
display: flex;
-webkit-box-pack: center;
justify-content: center;
background: rgba(3, 203, 23, 0.83);
-webkit-box-align: center;
align-items: center;
cursor: pointer;
`
export const ButtonEdit = styled.div`
height: 70px;
font-size: 20px;
width: 200px;
color: white;
border-radius: 30px;
display: flex;
-webkit-box-pack: center;
justify-content: center;
background: Orange;
-webkit-box-align: center;
align-items: center;
cursor: pointer;
`

export const MessageSuccess = styled.div`
color:green;
text-align:center;
display:none;
`