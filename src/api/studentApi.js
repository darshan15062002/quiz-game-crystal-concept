import axios from 'axios';
import { server } from './quizApi';

export const fetchTransactions = async (id) => {
  try {
    const res = await axios.get(`${server}/student/student-info/${id}`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return res.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const deleteTransaction = async (id, tid) => {
  try {
    const res = await axios.delete(`${server}/student/student-info/${id}?tid=${tid}`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return res.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
export const addStudentinfo = async (id, feesPaid, attendance) => {
  try {
    const res = await axios.post(`${server}/student/student-info`, { id, feesPaid, attendance }, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return res.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};