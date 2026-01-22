import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import expenseRoutes from "./routes/expenseRoutes.js";

dotenv.config();
const app = express();

// ✅ CORS (FIXED)
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://expense-tracker-liart-two-47.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

app.use(express.json());

// Database
connectDB();

// Routes
app.use("/api/expenses", expenseRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
