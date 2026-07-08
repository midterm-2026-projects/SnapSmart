import { describe, test, expect, beforeEach } from "vitest";

import {
  createBooking,
  getBookingById,
  updateBookingStatus,
} from "../models/bookingModel.js";

import bookings from "../config/db.js";

describe("Booking Model", () => {
  beforeEach(() => {
    bookings.length = 0;
  });

  describe("createBooking()", () => {
    test("should create a booking with valid data", () => {
      const booking = createBooking({
        clientName: "Franklin",
        eventDate: "2026-07-20",
      });

      expect(booking.clientName).toBe("Franklin");
      expect(booking.eventDate).toBe("2026-07-20");
      expect(booking.status).toBe("Pending");
      expect(booking.id).toBe(1);
    });
  });

  describe("getBookingById()", () => {
    test("should return booking when ID exists", () => {
      createBooking({
        clientName: "Franklin",
        eventDate: "2026-07-20",
      });

      const booking = getBookingById(1);

      expect(booking.id).toBe(1);
      expect(booking.clientName).toBe("Franklin");
    });

    test("should return undefined when ID does not exist", () => {
      const booking = getBookingById(99);

      expect(booking).toBeUndefined();
    });
  });

  
  describe("updateBookingStatus()", () => {
    test("should update booking status successfully", () => {
      createBooking({
        clientName: "Franklin",
        eventDate: "2026-07-20",
      });

      const booking = updateBookingStatus(1, "Approved");

      expect(booking.status).toBe("Approved");
    });

    test("should return null when booking does not exist", () => {
      const booking = updateBookingStatus(99, "Approved");

      expect(booking).toBeNull();
    });
  });
});