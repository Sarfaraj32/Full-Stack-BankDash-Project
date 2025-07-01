const express = require("express");
const router = express.Router();
const BarChartData = require("../models/BarChartData");

router.get("/", async (req, res) => {
  try {
    const data = await BarChartData.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching barchar data" });
  }
});

module.exports = router;
