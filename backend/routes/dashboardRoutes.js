import express from "express";

import {
  getDashboardSummary,
  getBookingTrends,
  getPerformanceMetrics,
} from "../controllers/dashboardController.js";

const router = express.Router();

// Dashboard Summary
router.get("/dashboard/summary", getDashboardSummary);

// Booking Trends
router.get("/dashboard/trends", getBookingTrends);

// Performance Metrics
router.get("/dashboard/performance", getPerformanceMetrics);

export default router;