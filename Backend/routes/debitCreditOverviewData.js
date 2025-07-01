const express = require("express");
const router = express.Router();
const DebitCreditOverviewData = require("../models/DebitCreditOverviewData");

router.get("/", async (req, res) => {
  try {
    const data = await DebitCreditOverviewData.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching Debit Card Data" });
  }
});

module.exports = router;
