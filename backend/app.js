import express from "express";
import * as bookingService from "./services/bookingService.js";

const app = express();

app.use(express.json());

// POST /bookings
app.post("/bookings", (req, res) => {
  try {
    const booking = bookingService.createBooking(req.body);

    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

// GET /bookings/:id
app.get("/bookings/:id", (req, res) => {
  const booking = bookingService.getBookingById(req.params.id);

  if (!booking) {
    return res.status(404).json({
      message: "Booking not found",
    });
  }

  res.status(200).json(booking);
});

// PUT /bookings/:id/status
app.put("/bookings/:id/status", (req, res) => {
  try {
    const booking = bookingService.updateBookingStatus(
      req.params.id,
      req.body.status
    );

    res.status(200).json(booking);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

export default app;

// Prevent server from starting during tests
if (process.env.NODE_ENV !== "test") {
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}