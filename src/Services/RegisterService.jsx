import { useNavigate } from "react-router-dom";
import API from "../API/API";

export const RegisterService = async (data) => {
    const url = `http://localhost:8181/user-service/register`;
    const response = await API({
        url,
        method: "post",
        data
    });
    console.log(`Responsse API SignUp : ${response}`);
    return response;
}

export const CreatePinService = async (data) => {
    const url = `http://localhost:8181/user-service/create-pin`;
    const response = await API({
        url,
        method: "post",
        data
    });
    console.log(`Responsse API Create Pin: ${response}`);
    return response;
}

export const ForgetPassService = async (data) => {
    const url = `http://localhost:8181/user-service/forget-pass`;
    const response = await API({
        url,
        method: "put",
        data
    });
    console.log(`Responsse API Forget Pass: ${response}`);
    return response;
}

export const ForgetPinService = async (data) => {
    const url = `http://localhost:8181/user-service/forget-pin`;
    const response = await API({
        url,
        method: "put",
        data
    });
    console.log(`Responsse API Forget Pin: ${response}`);
    return response;
}

export const ChangePassService = async (data) => {
    const url = `http://localhost:8181/user-service/change-pass/${data.email}`;
    const response = await API({
        url,
        method: "put",
        data
    });
    console.log(`Responsse API Change Pass: ${response}`);
    return response;
}

export const ChangePinService = async (data) => {
    const url = `http://localhost:8181/user-service/change-pin/${data.email}`;
    const response = await API({
        url,
        method: "put",
        data
    });
    console.log(`Responsse API Change Pin: ${response}`);
    return response;
}

export const AuthService = async (data) => {
    const url = `http://localhost:8181/user-service/login`;
    const response = await API({
      url,
      method: "post",
      data,
    });
    console.log(`Responsse API login: ${response}`);
    return response;
  };