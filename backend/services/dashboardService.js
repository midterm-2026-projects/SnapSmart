import * as bookingModel from "../models/bookingModel.js";

// ==============================
// Helper Function
// ==============================
function getBookingsOrThrow() {
  const bookings = bookingModel.getAllBookings();

  if (!bookings || bookings.length === 0) {
    throw new Error("No booking data available");
  }

  return bookings;
}

// ==============================
// Dashboard Summary
// ==============================
export function getDashboardSummary() {
  const bookings = getBookingsOrThrow();

  const totalBookings = bookings.length;

  const completed = bookings.filter(
    (booking) => booking.status === "Completed"
  ).length;

  const pending = bookings.filter(
    (booking) => booking.status === "Pending"
  ).length;

  const totalClients = new Set(
    bookings.map((booking) => booking.clientName)
  ).size;

  const totalRevenue = bookings.reduce(
    (sum, booking) => sum + (booking.amount || 0),
    0
  );

  return {
    totalBookings,
    completed,
    pending,
    totalClients,
    totalRevenue,
  };
}

// ==============================
// Booking Trends
// ==============================
export function getBookingTrends() {
  const bookings = getBookingsOrThrow();

  const monthlyBookings = {};

  bookings.forEach((booking) => {
    monthlyBookings[booking.month] =
      (monthlyBookings[booking.month] || 0) + 1;
  });

  return monthlyBookings;
}

// ==============================
// Performance Metrics
// ==============================
export function getPerformanceMetrics() {
  const bookings = getBookingsOrThrow();

  const completed = bookings.filter(
    (booking) => booking.status === "Completed"
  ).length;

  const completionRate = (completed / bookings.length) * 100;

  const averageRating =
    bookings.reduce(
      (sum, booking) => sum + (booking.rating || 0),
      0
    ) / bookings.length;

  return {
    completionRate,
    averageRating,
  };
}

// ==============================
// Financial Analytics
// ==============================

// Calculate Total Revenue
export function calculateRevenue() {
  const bookings = getBookingsOrThrow();

  return bookings.reduce(
    (total, booking) => total + (booking.amount || 0),
    0
  );
}

// Calculate Total Expenses
export function calculateExpenses() {
  const bookings = getBookingsOrThrow();

  return bookings.reduce(
    (total, booking) => total + (booking.expense || 0),
    0
  );
}

// Calculate Net Profit
export function calculateProfit() {
  return calculateRevenue() - calculateExpenses();
}