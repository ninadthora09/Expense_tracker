import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  person: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["Half", "Full"],
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Expense = mongoose.model("Expense", expenseSchema);
export default Expense;
