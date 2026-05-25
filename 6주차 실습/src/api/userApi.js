import axios from "axios";

const instance = axios.create({
    baseURL: "https://69f9d3d7c509a40d3aa363af.mockapi.io/api/v1/likelion"

});

export const signup = (data) => {
    return instance.post("/user", data);
};