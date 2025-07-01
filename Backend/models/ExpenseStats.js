const mongoose = require("mongoose");

const expenseStatsSchema = new mongoose.Schema({
  name: String,
  value: Number,
  color: String,
});

module.exports = mongoose.model("expenseStats", expenseStatsSchema);
