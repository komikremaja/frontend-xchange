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