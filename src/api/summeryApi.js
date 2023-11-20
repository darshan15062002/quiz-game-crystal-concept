import axios from "axios"
import { server } from "./quizApi"


export const getSummary = async (text, row = 4) => {
    try {
        const res = await axios.post(`${server}/summarize`, { pdf_text: text, rows: row })
        console.log(res.data.message);
        return res.data.message

    } catch (error) {
        console.log(error);
    }
}
