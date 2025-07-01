const express = require("express");
const router = express.Router();
const InvestmentChartData = require("../models/InvestmentChartData");

router.get("/", async (req, res) => {
  try {
    const data = await InvestmentChartData.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching Investment Chart Data" });
  }
});

module.exports = router;
