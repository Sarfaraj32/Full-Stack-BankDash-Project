const express = require("express");
const router = express.Router();
const TransExpenseStats = require("../models/TransExpenseStats");

router.get("/", async (req, res) => {
  try {
    const data = await TransExpenseStats.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching Transaction expense stats" });
  }
});

module.exports = router;
