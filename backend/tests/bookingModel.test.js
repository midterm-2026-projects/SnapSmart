import { describe, test, expect, beforeEach } from "vitest";

import {
  bookings,
  createBooking,
  getBookingById,
  updateBookingStatus,
} from "../models/bookingModel.js";

describe("Booking Model", () => {

  beforeEach(() => {
    // Reset mock database before every test
    bookings.length = 0;
  });

  describe("createBooking()", () => {

    test("should create a booking with valid data", () => {

      const booking = createBooking({
        clientName: "Franklin",
        eventDate: "2026-07-20",
        month: "Jul",
        amount: 5000,
        rating: 5,
      });

      expect(booking).toEqual({
        id: 1,
        clientName: "Franklin",
        eventDate: "2026-07-20",
        month: "Jul",
        amount: 5000,
        rating: 5,
        status: "Pending",
      });

      expect(bookings.length).toBe(1);

    });

  });

  describe("getBookingById()", () => {

    test("should return booking when ID exists", () => {

      createBooking({
        clientName: "Franklin",
        eventDate: "2026-07-20",
        month: "Jul",
        amount: 5000,
        rating: 5,
      });

      const booking = getBookingById(1);

      expect(booking.id).toBe(1);
      expect(booking.clientName).toBe("Franklin");
      expect(booking.status).toBe("Pending");
      expect(booking.month).toBe("Jul");
      expect(booking.amount).toBe(5000);
      expect(booking.rating).toBe(5);

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
        month: "Jul",
        amount: 5000,
        rating: 5,
      });

      const booking = updateBookingStatus(1, "Approved");

      expect(booking.status).toBe("Approved");
      expect(bookings[0].status).toBe("Approved");

    });

    test("should return null when booking does not exist", () => {

      const booking = updateBookingStatus(99, "Approved");

      expect(booking).toBeNull();

    });

  });

});