import axios from "axios";

const baseAxios = axios.create({
    baseURL:process.env.LOCALHOST
})

export default baseAxios