import * as bookingService from "../services/bookingService.js";

// Create Booking
export function createBooking(req, res) {
  try {
    const booking = bookingService.createBooking(req.body);

    return res.status(201).json({
      message: "Booking created successfully",
      data: booking,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}

// Get Booking by ID
export function getBookingById(req, res) {
  try {
    const booking = bookingService.getBookingById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    return res.status(200).json({
      message: "Booking retrieved successfully",
      data: booking,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}

// Update Booking Status
export function updateBookingStatus(req, res) {
  try {
    const booking = bookingService.updateBookingStatus(
      req.params.id,
      req.body.status
    );

    return res.status(200).json({
      message: "Booking status updated successfully",
      data: booking,
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
}