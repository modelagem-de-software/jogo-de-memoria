import Axios from "axios";

const base_url = 'http://localhost:3000';
const configAxios = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Authorization",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
        "Content-Type": "application/json;charset=UTF-8"
    },
    baseURL: base_url
}

const axiosInstancia = Axios.create(configAxios);

export default {
    getItensMenu(path = '') {
        return axiosInstancia.get(path);
    }
}
