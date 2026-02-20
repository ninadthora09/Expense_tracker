import React from "react";

export default function ExpenseList({ expenses, onDeleteExpense }) {
  // ✅ Group expenses by date
  const groupedExpenses = expenses.reduce((acc, exp) => {
    const date = exp.date.split("T")[0];
    if (!acc[date]) acc[date] = { Ninad: 0, Other: 0, records: [] };

    // Add amount based on person
    if (exp.person === "Ninad") acc[date].Ninad += exp.amount;
    else acc[date].Other += exp.amount;

    acc[date].records.push(exp);
    return acc;
  }, {});

  const sortedDates = Object.keys(groupedExpenses).sort(
    (a, b) => new Date(b) - new Date(a)
  );

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-indigo-100">
      <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
        📅 Expense History
      </h2>

      {sortedDates.length === 0 ? (
        <p className="text-gray-500 text-center py-6 italic">
          No records yet 🍽️
        </p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm text-gray-700">
            <thead className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white uppercase text-sm tracking-wide">
              <tr>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-center">Ninad (₹)</th>
                <th className="px-4 py-3 text-center">Om (₹)</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedDates.map((date, index) => (
                <tr
                  key={date}
                  className={`transition-colors duration-200 ${
                    index % 2 === 0
                      ? "bg-white hover:bg-indigo-50"
                      : "bg-gray-50 hover:bg-indigo-50/70"
                  }`}
                >
                  <td className="px-4 py-3 font-medium text-gray-800">{date}</td>
                  <td className="px-4 py-3 text-center font-semibold text-indigo-600">
                    {groupedExpenses[date].Ninad}
                  </td>
                  <td className="px-4 py-3 text-center font-semibold text-purple-600">
                    {groupedExpenses[date].Other}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {groupedExpenses[date].records.map((exp) => (
                      <button
                        key={exp._id}
                        onClick={() => onDeleteExpense(exp._id)}
                        className="text-red-500 hover:text-red-700 hover:scale-110 transition-transform mx-1 font-medium cursor-pointer"
                      >
                        🗑️
                      </button>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
