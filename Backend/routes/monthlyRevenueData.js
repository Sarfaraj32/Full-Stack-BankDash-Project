const express = require("express");
const router = express.Router();
const MonthlyRevenueData = require("../models/MonthlyRevenueData");

router.get("/", async (req, res) => {
  try {
    const data = await MonthlyRevenueData.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching Monthly Revenue Data" });
  }
});

module.exports = router;
