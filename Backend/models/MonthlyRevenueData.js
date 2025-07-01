const mongoose = require("mongoose");

const MonthlyRevenueDataSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("MonthlyRevenueData", MonthlyRevenueDataSchema);
