const express = require("express");
const router = express.Router();
const AreaChartData = require("../models/AreaChartData");

router.get("/", async (req, res) => {
  try {
    const data = await AreaChartData.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching Area Chart Data" });
  }
});

module.exports = router;
