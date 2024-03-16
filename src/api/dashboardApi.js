import axios from "axios"
import { server } from "./quizApi"


export const getDashboard = async () => {

    try {
        const res = await axios.get(`${server}/admin/dashboard`, { withCredentials: true, headers: { 'Content-Type': 'application' } })

        return res.data
    } catch (error) {
        return error.response.data
    }


}