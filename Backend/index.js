require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const barChartDataRoutes = require("./routes/barChartData");
const expenseStatsRoutes = require("./routes/expenseStats");
const areaChartDataRoutes = require("./routes/areaChartData");
const transExpenseStatsRoute = require("./routes/transExpenseStats");
const transactionTableDataRoute = require("./routes/transactionTableData");
const investmentChartDataRoute = require("./routes/investmentChartData");
const DebitCreditOverviewDataRoute = require("./routes/debitCreditOverviewData");
const MonthlyRevenueDataRoute = require("./routes/monthlyRevenueData");

const ExpenseStats = require("./models/ExpenseStats");
const BarChartData = require("./models/BarChartData");
const AreaChartData = require("./models/AreaChartData");
const TransExpenseStatsData = require("./models/TransExpenseStats");
const TransactionTableData = require("./models/TransactionTableData");
const InvestmentChartData = require("./models/InvestmentChartData");
const DebitCreditOverviewData = require("./models/DebitCreditOverviewData");
const MonthlyRevenueData = require("./models/MonthlyRevenueData");

const app = express();
const PORT = process.env.PORT || 3000;

// mongoose
//   .connect(process.env.DB_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// This is the connection string for MongoDB Atlas cluster
mongoose
  .connect(process.env.DBC_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/barchartdata", barChartDataRoutes);
app.use("/api/expensestats", expenseStatsRoutes);
app.use("/api/areachartdata", areaChartDataRoutes);
app.use("/api/transExpensedata", transExpenseStatsRoute);
app.use("/api/transactionTableData", transactionTableDataRoute);
app.use("/api/investmentChartData", investmentChartDataRoute);
app.use("/api/debitCreditOverviewData", DebitCreditOverviewDataRoute);
app.use("/api/monthlyRevenueData", MonthlyRevenueDataRoute);

app.get("/", (req, res) => {
  res.send("Welcome to the Expense Tracker API");
});

app.get("/api/expense-stats", async (req, res) => {
  try {
    const data = await ExpenseStats.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching expense stats Data" });
  }
});

app.get("/api/barchartdata", async (req, res) => {
  try {
    const data = await BarChartData.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching Bar chart data" });
  }
});

app.get("/api/areachartdata", async (req, res) => {
  try {
    const data = await AreaChartData.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching Area chart data" });
  }
});

app.get("/api/transExpensedata", async (req, res) => {
  try {
    const data = await TransExpenseStatsData.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching Transaction Expense data" });
  }
});

app.get("/api/transactionTableData", async (req, res) => {
  try {
    const data = await TransactionTableData.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching Transaction table data" });
  }
});

app.get("/api/investmentChartData", async (req, res) => {
  try {
    const data = await InvestmentChartData.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching Investment table data" });
  }
});

app.get("/api/debitCreditOverviewData", async (req, res) => {
  try {
    const data = await DebitCreditOverviewData.find();
    res.json(data);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error fetching Debit Credit Overview data" });
  }
});

app.get("/api/monthlyRevenueData", async (req, res) => {
  try {
    const data = await MonthlyRevenueData.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching Monthly Revenue data" });
  }
});

// error check tounaba middle ware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} : http://localhost:${PORT}`);
});
