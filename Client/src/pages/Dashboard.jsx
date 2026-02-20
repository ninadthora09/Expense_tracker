import React, { useState, useEffect } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import TotalBalance from "../components/TotalBalance";
import { getAllExpenses, addExpense, deleteExpense } from "../api/expenseAPI";

export default function Dashboard() {
  const [expenses, setExpenses] = useState([]);

  // ✅ Fetch all expenses from backend
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllExpenses();
      setExpenses(data);
    };
    fetchData();
  }, []);

  // ✅ Add new expense
  const handleAddExpense = async (newExpense) => {
    const savedExpense = await addExpense(newExpense);
    setExpenses((prev) => [...prev, savedExpense]);
  };

  // ✅ Delete expense
  const handleDeleteExpense = async (id) => {
    await deleteExpense(id);
    setExpenses((prev) => prev.filter((exp) => exp._id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 p-6 text-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* ---------- LEFT SIDE ---------- */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
          <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            💼 Order List
          </h1>

          {/*  Total Balance Section */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 mb-6 shadow-inner">
            <TotalBalance expenses={expenses} />
          </div>

          {/*  Divider */}
          <div className="my-6 border-t border-gray-200"></div>

          {/*  Expense Form */}
          <div className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300">
            <ExpenseForm onAddExpense={handleAddExpense} />
          </div>
        </div>

        {/* ---------- RIGHT SIDE ---------- */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
          <h2 className="text-3xl font-semibold text-center mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            📜 Expense Records
          </h2>

          <div className="bg-gray-50 rounded-xl p-4 max-h-[70vh] overflow-y-auto shadow-inner">
            <ExpenseList
              expenses={expenses}
              onDeleteExpense={handleDeleteExpense}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
