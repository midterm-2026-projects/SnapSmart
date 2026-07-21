import express from "express";

import {
  getRevenueController,
  getExpensesController,
  getProfitController,
} from "../controllers/dashboardController.js";

const router = express.Router();

// Get Total Revenue
router.get(
  "/revenue",
  getRevenueController
);

// Get Total Expenses
router.get(
  "/expenses",
  getExpensesController
);

// Get Net Profit
router.get(
  "/profit",
  getProfitController
);

export default router;