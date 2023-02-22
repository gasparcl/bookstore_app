import axios from "axios"
import { getUserLocalStorage } from "./utils"

export const api = axios.create({
    baseURL: "http://localhost:3000/api/v1",
})

export default api
