const mongoose = require("mongoose");

const areaChartDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("AreaChartData", areaChartDataSchema);
