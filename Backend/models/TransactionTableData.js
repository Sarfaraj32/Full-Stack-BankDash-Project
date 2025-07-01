const mongoose = require("mongoose");

const TransactionTableDataSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  transacid: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  card: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  isIncome: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model(
  "TransactionTableData",
  TransactionTableDataSchema
);
