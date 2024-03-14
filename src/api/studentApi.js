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

export const handleDeleteTransaction = async (index) => {
  try {
    await axios.delete(`${server}/student-info/${index}`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error(error);
    return error;
  }
};
export const addStudentinfo = async (id, feesPaid ) => {
    try {
      const res = await axios.post(`${server}/student/student-info`, { id, feesPaid }, {
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