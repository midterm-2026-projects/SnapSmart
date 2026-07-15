import { describe, test, expect, vi, beforeEach } from "vitest";

import * as bookingModel from "../models/bookingModel.js";
import {
  createBooking,
  getBookingById,
  updateBookingStatus,
} from "../services/bookingService.js";

// Mock the Model
vi.mock("../models/bookingModel.js", () => ({
  createBooking: vi.fn(),
  getBookingById: vi.fn(),
  updateBookingStatus: vi.fn(),
}));

describe("Booking Service", () => {

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("createBooking()", () => {

    test("should create booking with valid data", () => {

      bookingModel.createBooking.mockReturnValue({
        id: 4,
        clientName: "Franklin",
        eventDate: "2026-07-20",
        month: "Jul",
        amount: 5000,
        rating: 5,
        status: "Pending",
      });

      const booking = createBooking({
        clientName: "Franklin",
        eventDate: "2026-07-20",
        month: "Jul",
        amount: 5000,
        rating: 5,
      });

      expect(booking).toEqual({
        id: 4,
        clientName: "Franklin",
        eventDate: "2026-07-20",
        month: "Jul",
        amount: 5000,
        rating: 5,
        status: "Pending",
      });

      expect(booking.clientName).toBe("Franklin");

      expect(bookingModel.createBooking).toHaveBeenCalledWith({
        clientName: "Franklin",
        eventDate: "2026-07-20",
        month: "Jul",
        amount: 5000,
        rating: 5,
      });

    });

    test("should throw error when client name is missing", () => {

      expect(() =>
        createBooking({
          eventDate: "2026-07-20",
        })
      ).toThrow("Client Name is required");

    });

    test("should throw error when event date is missing", () => {

      expect(() =>
        createBooking({
          clientName: "Franklin",
        })
      ).toThrow("Event Date is required");

    });

  });

  describe("getBookingById()", () => {

    test("should return booking when found", () => {

      bookingModel.getBookingById.mockReturnValue({
        id: 1,
        clientName: "Franklin",
        status: "Pending",
      });

      const booking = getBookingById(1);

      expect(booking.id).toBe(1);

      expect(bookingModel.getBookingById).toHaveBeenCalledWith(1);

    });

    test("should return undefined when booking does not exist", () => {

      bookingModel.getBookingById.mockReturnValue(undefined);

      const booking = getBookingById(999);

      expect(booking).toBeUndefined();

      expect(bookingModel.getBookingById).toHaveBeenCalledWith(999);

    });

  });

  describe("updateBookingStatus()", () => {

    test("should update booking status successfully", () => {

      bookingModel.getBookingById.mockReturnValue({
        id: 1,
        status: "Pending",
      });

      bookingModel.updateBookingStatus.mockReturnValue({
        id: 1,
        status: "Approved",
      });

      const booking = updateBookingStatus(1, "Approved");

      expect(booking.status).toBe("Approved");

      expect(bookingModel.getBookingById).toHaveBeenCalledWith(1);

      expect(bookingModel.updateBookingStatus).toHaveBeenCalledWith(
        1,
        "Approved"
      );

    });

    test("should throw error when booking is not found", () => {

      bookingModel.getBookingById.mockReturnValue(null);

      expect(() =>
        updateBookingStatus(99, "Approved")
      ).toThrow("Booking not found");

      expect(bookingModel.getBookingById).toHaveBeenCalledWith(99);

    });

  });

});