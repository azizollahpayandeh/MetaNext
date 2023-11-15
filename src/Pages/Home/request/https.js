import axios from "axios";

export const Http = axios.create({
    baseURL: 'https://demo1.metanext.biz/api/v1'
})
