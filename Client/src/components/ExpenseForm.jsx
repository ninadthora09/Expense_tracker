import React, { useState, useEffect } from "react";
import Button from "./shared/Button";

export default function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    person: "",
    category: "",
    date: "",
  });

  // ✅ Automatically set today's date
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setFormData((prev) => ({ ...prev, date: today }));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.person || !formData.category) return;

    const amount = formData.category === "Half Tiffin" ? 40 : 70;

    onAddExpense({
      ...formData,
      amount,
    });

    const today = new Date().toISOString().split("T")[0];
    setFormData({ person: "", category: "", date: today });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-indigo-100"
    >
      <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
        🍱 Add Tiffin Record
      </h2>

      {/* Select Person */}
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-1">Select Person</label>
        <select
          name="person"
          value={formData.person}
          onChange={handleChange}
          className="w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
        >
          <option value="">Choose...</option>
          <option value="Ninad">👨 Ninad</option>
          <option value="Other">👤 Om</option>
        </select>
      </div>

      {/* Select Category */}
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-1">Tiffin Type</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
        >
          <option value="">Choose...</option>
          <option value="Half Tiffin">🥪 Half Tiffin (₹40)</option>
          <option value="Full Tiffin">🍛 Full Tiffin (₹70)</option>
        </select>
      </div>

      {/* Hidden Date Input */}
      <input type="hidden" name="date" value={formData.date} />

      {/* Submit Button */}
      <div className="pt-2 text-center cursor-pointer">
        <Button type="submit" label="Add Record" />
      </div>
    </form>
  );
}
