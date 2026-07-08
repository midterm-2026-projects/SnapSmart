import * as bookingModel from "../models/bookingModel.js";

// ==============================
// Booking Service
// ==============================

// Create Booking
export function createBooking(data) {
  if (!data.clientName) {
    throw new Error("Client Name is required");
  }

  if (!data.eventDate) {
    throw new Error("Event Date is required");
  }

  return bookingModel.createBooking(data);
}

// Get Booking by ID
export function getBookingById(id) {
  return bookingModel.getBookingById(id);
}

// Update Booking Status
export function updateBookingStatus(id, status) {
  const booking = bookingModel.getBookingById(id);

  if (!booking) {
    throw new Error("Booking not found");
  }

  return bookingModel.updateBookingStatus(id, status);
}

/* =====================================================
   Analytics Service Functions
   Objective 2 - Week 3 Day 1
===================================================== */

export function getDashboardSummary() {
  const bookings = bookingModel.getAllBookings();

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
      (total, booking) => total + (booking.amount || 0),
      0
    ),
  };
}

export function getBookingTrends() {
  const bookings = bookingModel.getAllBookings();

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  return months.map((month) => ({
    month,
    bookings: bookings.filter(
      (booking) => booking.month === month
    ).length,
  }));
}

export function getPerformanceMetrics() {
  const bookings = bookingModel.getAllBookings();

  const completed = bookings.filter(
    (booking) => booking.status === "Completed"
  ).length;

  const completionRate =
    bookings.length === 0
      ? 0
      : Math.round((completed / bookings.length) * 100);

  return {
    bookingCompletionRate: completionRate,
    clientSatisfaction: 92,
    revenueGrowth: 68,
    serviceQualityScore: 88,
  };
}