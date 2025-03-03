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
        console.log(res.data, "darshan");
        return res.data
    } catch (error) {
        return error

    }
}

export const userRegister = async ({ name, phone, std, location, password, role = 'user' }) => {
    try {
        const res = await axios.post(`${server}/user/new`, { name, phone, std, location, password, role }, {
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
export const updateProfileByAdmin = async (name, phone, std, location, id) => {
    try {
        const res = await axios.put(`${server}/user/updateprofilebyadmin/${id}`, {
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

export const deleteUser = async (id) => {
    try {
        const res = await axios.delete(`${server}/student/single/${id}`, { withCredentials: true })

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

export const getAllStudents = async (query = 'student') => {
    try {
        let url = `${server}/student/all?role=${query}`;



        const res = await axios.get(url, { withCredentials: true });
        return res.data;
    } catch (error) {
        return error.response.data
    }
}

export const getStudentProfile = async (id) => {
    try {
        let url = `${server}/student/single/${id}`;

        const res = await axios.get(url, { withCredentials: true });
        return res.data;
    } catch (error) {
        return error.response.data
    }
}


export const sendOTP = async (phone) => {
    try {
        const res = await axios.post(`${server}/user/forgetpassword`, { phone }, {
            headers: {
                'Content-Type': 'application/json'
            },
        })
        return res.data
    } catch (error) {
        console.log(error.response);

        return error.response.data
    }
}

export const resetPassword = async (otp, password) => {
    try {

        const res = await axios.put(`${server}/user/forgetpassword`, { otp, password }, {
            headers: {
                'Content-Type': 'application/json'
            },
        });
        return res.data;
    } catch (error) {
        return error.response.data;
    }
};