const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Connect Database
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("SpendWise API is running...");
});

// Import Routes
const authRoutes = require("./routes/authRoutes");
const transactionRoutes = require("./routes/transactionRoutes");

// Use Routes
app.use("/api/auth", authRoutes);
app.use("/api/transactions", transactionRoutes);

// Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});