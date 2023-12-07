import axios from "axios"
import { server } from "./quizApi"

export const submitQuiz = async (currentQuizId, title, selectedOptions, computedPoints) => {
    try {
        const res = await axios.post(`${server}/quiz/submission`, {

            quizId: currentQuizId,
            quizTitle: title,
            answers: selectedOptions,
            points: computedPoints
        }, {
            headers: {
                "Content-Type": "application/json"
            },
            "withCredentials": true
        })
        return res
    } catch (error) {

        return error
    }
}
export const getMyAllSubmitedQuiz = async () => {
    try {
        const res = await axios.get(`${server}/quiz/submission/all`, {
            headers: {
                "Content-Type": "application/json"
            },
            "withCredentials": true
        })

        return res?.data?.data
    } catch (error) {
        return error

    }
}

export const getMySingleSubmitedQuiz = async (id) => {
    try {
        const res = await axios.get(`${server}/quiz/submission/single/${id}`, {

            "withCredentials": true
        })

        return res?.data
    } catch (error) {
        console.log(error);

    }
}