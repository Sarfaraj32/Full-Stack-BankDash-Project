const express = require("express");
const router = express.Router();
const ExpenseStats = require("../models/ExpenseStats");

router.get("/", async (req, res) => {
  try {
    const data = await ExpenseStats.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching expense stats" });
  }
});

module.exports = router;
