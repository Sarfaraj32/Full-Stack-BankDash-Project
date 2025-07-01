const mongoose = require("mongoose");

const expenseStatsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  expense: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Transexpensestatsdatas", expenseStatsSchema);
