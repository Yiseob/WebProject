import axios from "axios";

const instance = axios.create({
    baseURL: "http://3.34.149.238:8080",
    headers: {
        "Content-Type": "application/json",
    },
});

export default instance;