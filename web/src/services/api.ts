import axios from "axios"

export const api = axios.create({
    baseURL: "http://localhost:3001/api/v1/",
})

export const authApi = axios.create({
    baseURL: "http://localhost:3001/",
})

export default api
