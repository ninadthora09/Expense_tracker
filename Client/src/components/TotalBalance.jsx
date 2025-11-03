import React from "react";

export default function TotalBalance({ expenses = [] }) {
  if (!Array.isArray(expenses)) expenses = []; // safety fallback

  // ✅ Calculate totals safely
  const totals = expenses.reduce(
    (acc, exp) => {
      if (exp.person === "Ninad") acc.ninad += exp.amount;
      else acc.other += exp.amount;
      acc.total += exp.amount;
      return acc;
    },
    { ninad: 0, other: 0, total: 0 }
  );

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl p-6 shadow-md border border-indigo-100 hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col sm:flex-row items-center justify-around gap-6">
        {/* Ninad’s Expense */}
        <div className="flex flex-col items-center bg-white/60 backdrop-blur-md px-6 py-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-indigo-100 w-full sm:w-1/3">
          <h3 className="text-lg font-semibold text-gray-700">
            👨‍💼 Ninad’s Expense
          </h3>
          <p className="text-3xl font-extrabold text-indigo-600 mt-1">
            ₹{totals.ninad}
          </p>
        </div>

        {/* Om’s Expense */}
        <div className="flex flex-col items-center bg-white/60 backdrop-blur-md px-6 py-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-green-100 w-full sm:w-1/3">
          <h3 className="text-lg font-semibold text-gray-700">👤 Om’s Expense</h3>
          <p className="text-3xl font-extrabold text-green-600 mt-1">
            ₹{totals.other}
          </p>
        </div>

        {/* Grand Total */}
        <div className="flex flex-col items-center bg-white/60 backdrop-blur-md px-6 py-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-rose-100 w-full sm:w-1/3">
          <h3 className="text-lg font-semibold text-gray-700">💰 Grand Total</h3>
          <p className="text-3xl font-extrabold text-rose-600 mt-1">
            ₹{totals.total}
          </p>
        </div>
      </div>
    </div>
  );
}
