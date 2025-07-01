const mongoose = require("mongoose");

const InvestmentChartDataSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model(
  "InvestmentChartData",
  InvestmentChartDataSchema
);
