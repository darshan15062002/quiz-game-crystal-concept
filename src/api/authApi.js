import axios from "axios"
import { server } from "./quizApi"

export const userLogin = async ({ email, password }) => {
    try {
        const res = await axios.post(`${server}/user/login`, { email, password }, {
            headers: {
                "Content-Type": "application/json"
            },
            "withCredentials": true
        })

        return res.data
    } catch (error) {
        return error.response.data

    }
}

export const userRegister = async ({ name, email, password }) => {
    try {
        const res = await axios.post(`${server}/user/new`, { name, email, password }, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        })
        return res

    } catch (error) {
        return error.response.data.message
    }
}

export const updateProfile = async () => {

}

export const userLogout = async () => {
    try {
        const res = await axios.post(`${server}/user/logout`, {
            "withCredentials": true
        })


    } catch (error) {
        console.log(error.response.data);
    }
}

export const loadUser = async () => {
    try {
        const res = await axios.get(`${server}/user/me`, {
            headers: {
                'Content-Type': 'application/json'
            },
            'withCredentials': true
        });
        return res.data
    } catch (error) {

        return error.response.data
    }
}