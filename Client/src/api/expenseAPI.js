import axios from "axios";

const API = import.meta.env.VITE_API_URL;

//  Get all expenses
export const getAllExpenses = async () => {
  const res = await axios.get(`${API}/api/expenses`);
  return res.data;
};

//  Add a new expense
export const addExpense = async (expense) => {
  const res = await axios.post(`${API}/api/expenses`, expense);
  return res.data;
};

//  Delete an expense
export const deleteExpense = async (id) => {
  const res = await axios.delete(`${API}/api/expenses/${id}`);
  return res.data;
};
