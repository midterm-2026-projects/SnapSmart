import * as dashboardService from "../services/dashboardService.js";

// Dashboard Summary
export function getDashboardSummary(req, res) {
  try {
    const summary = dashboardService.getDashboardSummary();

    return res.status(200).json({
      message: "Dashboard summary retrieved successfully",
      data: summary,
    });

  } catch (error) {

    const status =
      error.message === "No booking data available"
        ? 404
        : 500;

    return res.status(status).json({
      message: error.message,
    });

  }
}

// Booking Trends
export function getBookingTrends(req, res) {
  try {
    const trends = dashboardService.getBookingTrends();

    return res.status(200).json({
      message: "Booking trends retrieved successfully",
      data: trends,
    });

  } catch (error) {

    const status =
      error.message === "No booking data available"
        ? 404
        : 500;

    return res.status(status).json({
      message: error.message,
    });

  }
}

// Performance Metrics
export function getPerformanceMetrics(req, res) {
  try {
    const performance =
      dashboardService.getPerformanceMetrics();

    return res.status(200).json({
      message: "Performance metrics retrieved successfully",
      data: performance,
    });

  } catch (error) {

    const status =
      error.message === "No booking data available"
        ? 404
        : 500;

    return res.status(status).json({
      message: error.message,
    });

  }
}