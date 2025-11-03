import axios from "axios";

const API_URL = "http://localhost:5000/api/expenses"; // adjust if needed

export const getAllExpenses = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const addExpense = async (expense) => {
  const res = await axios.post(API_URL, expense);
  return res.data;
};

export const deleteExpense = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
