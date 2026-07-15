import express from "express";
import {
  createBooking,
  getBookingById,
  updateBookingStatus,
} from "../controllers/bookingController.js";

const router = express.Router();

router.post("/bookings", createBooking);

router.get("/bookings/:id", getBookingById);

router.put("/bookings/:id/status", updateBookingStatus);

export default router;