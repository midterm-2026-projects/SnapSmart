import express from "express";
import {
  createBooking,
  getBookingById,
  updateBookingStatus,
} from "../controllers/bookingController.js";

const router = express.Router();

// Create a new booking
router.post("/bookings", createBooking);

// Get booking by ID
router.get("/bookings/:id", getBookingById);

// Update booking status
router.put("/bookings/:id/status", updateBookingStatus);

export default router;