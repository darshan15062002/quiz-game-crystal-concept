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
        return error

    }
}

export const userRegister = async ({ name, phone, std, location, password }) => {
    try {
        const res = await axios.post(`${server}/user/new`, { name, phone, std, location, password }, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        })

        return res

    } catch (error) {
        return error

    }
}

export const updateProfile = async (name, phone, std, location) => {
    try {
        const res = await axios.put(`${server}/user/updateprofile`, {
            name: name,
            phone: phone,
            std: std,
            location: location
        }, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        })

        return res.data
    } catch (error) {
        return error.response.data
    }
}

export const userLogout = async () => {
    try {
        const res = await axios.get(`${server}/user/logout`, {
            "withCredentials": true
        })

        return res.data
    } catch (error) {
        return error.response.data
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

export const getAllUsers = async (page, query, search) => {
    try {
        let url = `${server}/user/all?page=${page}`;

        if (query && search) {
            url += `&${query}=${search}`;
        }

        const res = await axios.get(url, { withCredentials: true });
        return res.data;
    } catch (error) {
        return error.response.data
    }
}