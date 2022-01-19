import axios from "axios";
const axiosClient = axios.create({
    baseURL: "https://json-server-bmw.herokuapp.com/api/",
    header: {
        'Content-Type': "application/json"
    }
})