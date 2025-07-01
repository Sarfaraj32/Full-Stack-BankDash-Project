const express = require("express");
const router = express.Router();
const TransactionTableData = require("../models/TransactionTableData");

router.get("/", async (req, res) => {
  try {
    const data = await TransactionTableData.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching Transaction Table Data" });
  }
});

module.exports = router;
