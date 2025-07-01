const mongoose = require("mongoose");

const DebitCreditOverviewDataSchema = new mongoose.Schema({
  day: {
    type: String,
    required: true,
  },
  debit: {
    type: Number,
    required: true,
  },
  credit: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model(
  "DebitCreditOverviewData",
  DebitCreditOverviewDataSchema
);
