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