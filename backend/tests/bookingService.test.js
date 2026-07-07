import { describe, test, expect, vi, beforeEach } from "vitest";

import * as bookingModel from "../models/bookingModel.js";

import {
  createBooking,
  getBookingById,
  updateBookingStatus,
} from "../services/bookingService.js";

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
    test("should create a booking when valid data is provided", () => {
      bookingModel.createBooking.mockReturnValue({
        id: 1,
        clientName: "Franklin",
        eventDate: "2026-07-20",
        status: "Pending",
      });

      const result = createBooking({
        clientName: "Franklin",
        eventDate: "2026-07-20",
      });

      expect(result.clientName).toBe("Franklin");
      expect(bookingModel.createBooking).toHaveBeenCalledWith({
        clientName: "Franklin",
        eventDate: "2026-07-20",
      });
    });

    test("should throw an error when client name is missing", () => {
      expect(() =>
        createBooking({
          eventDate: "2026-07-20",
        })
      ).toThrow("Client Name is required");
    });

    test("should throw an error when event date is missing", () => {
      expect(() =>
        createBooking({
          clientName: "Franklin",
        })
      ).toThrow("Event Date is required");
    });
  });

  describe("getBookingById()", () => {
    test("should return booking when ID exists", () => {
      bookingModel.getBookingById.mockReturnValue({
        id: 1,
        clientName: "Franklin",
      });

      const result = getBookingById(1);

      expect(result.id).toBe(1);
      expect(bookingModel.getBookingById).toHaveBeenCalledWith(1);
    });

    test("should return undefined when ID does not exist", () => {
      bookingModel.getBookingById.mockReturnValue(undefined);

      const result = getBookingById(999);

      expect(result).toBeUndefined();
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

      const result = updateBookingStatus(1, "Approved");

      expect(result.status).toBe("Approved");

      expect(bookingModel.getBookingById).toHaveBeenCalledWith(1);

      expect(bookingModel.updateBookingStatus).toHaveBeenCalledWith(
        1,
        "Approved"
      );
    });

    test("should throw an error when booking does not exist", () => {
      bookingModel.getBookingById.mockReturnValue(null);

      expect(() =>
        updateBookingStatus(999, "Approved")
      ).toThrow("Booking not found");

      expect(bookingModel.getBookingById).toHaveBeenCalledWith(999);
    });
  });
});