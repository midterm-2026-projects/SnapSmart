import * as bookingModel from "../models/bookingModel.js";

// ==============================
// Dashboard Service
// ==============================

// Dashboard Summary
export function getDashboardSummary() {
  const bookings = bookingModel.getAllBookings();

  if (bookings.length === 0) {
    throw new Error("No booking data available");
  }

  return {
    totalBookings: bookings.length,

    completed: bookings.filter(
      (booking) => booking.status === "Completed"
    ).length,

    pending: bookings.filter(
      (booking) => booking.status === "Pending"
    ).length,

    totalClients: bookings.length,

    totalRevenue: bookings.reduce(
      (total, booking) => total + booking.amount,
      0
    ),
  };
}

// Booking Trends
export function getBookingTrends() {
  const bookings = bookingModel.getAllBookings();

  if (bookings.length === 0) {
    throw new Error("No booking data available");
  }

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  return months.map((month) => ({
    month,
    bookings: bookings.filter(
      (booking) => booking.month === month
    ).length,
  }));
}

// Performance Metrics
export function getPerformanceMetrics() {
  const bookings = bookingModel.getAllBookings();

  if (bookings.length === 0) {
    throw new Error("No booking data available");
  }

  const completed = bookings.filter(
    (booking) => booking.status === "Completed"
  ).length;

  const bookingCompletionRate =
    Math.round((completed / bookings.length) * 100);

  const clientSatisfaction =
    Math.round(
      bookings.reduce(
        (total, booking) => total + booking.rating,
        0
      ) / bookings.length
    );

  return {
    bookingCompletionRate,
    clientSatisfaction,
  };
}