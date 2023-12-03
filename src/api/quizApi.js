import axios from "axios"
// export const server = 'http://localhost:4000/api/v1'
export const server = 'https://crystal-concept-backend.onrender.com/api/v1'
export const handleGetAllQuiz = async () => {
    try {
        const { data } = await axios.get(`${server}/quiz/all`)
        return data.quizs
    } catch (err) {
        console.log(err);
    }
}


export const handleGetAllVisibleQuiz = async () => {
    try {
        const { data } = await axios.get(`${server}/quiz/visible/all`)
        return data.quizs
    } catch (err) {
        console.log(err);
    }
}

export const createQuiz = async (quiz) => {
    try {
        const res = await axios.post(`${server}/quiz/new`, quiz, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return res
    } catch (error) {
        console.log(error.response.data.message, "error darshan");
    }
}
export const updateQuiz = async (id, quiz) => {

    try {
        const res = await axios.put(`${server}/quiz/single/${id}`, quiz, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return res
    } catch (error) {
        console.log(error.response.data.message, "error darshan");
    }
}

export const deleteQuiz = async (id) => {

    try {
        const res = await axios.delete(`${server}/quiz/single/${id}`)
        return res.data
    } catch (error) {
        console.log(error.response.data.message)
    }
}

export const getSingleQuiz = async (id) => {
    try {
        const res = await axios.get(`${server}/quiz/single/${id}`)

        return res
    } catch (error) {
        console.log(error.response.data.message);
    }
}


