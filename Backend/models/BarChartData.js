const mongoose = require("mongoose");

const barChartDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  withdraw: {
    type: Number,
    required: true,
  },
  deposit: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("BarChartData", barChartDataSchema);
