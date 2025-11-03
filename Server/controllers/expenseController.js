import Expense from "../models/Expense.js";

// @desc Get all expenses
export const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ date: -1 });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc Add a new expense
export const addExpense = async (req, res) => {
  try {
    const { person, category, amount, date } = req.body;
    const newExpense = new Expense({ person, category, amount, date });
    const saved = await newExpense.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: "Failed to add expense" });
  }
};

// @desc Delete expense
export const deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findByIdAndDelete(req.params.id);
    if (!expense) return res.status(404).json({ message: "Expense not found" });
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete expense" });
  }
};
