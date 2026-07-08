import { describe, test, expect, vi, beforeEach } from "vitest";

import * as bookingModel from "../models/bookingModel.js";

import {
  createBooking,
  getBookingById,
  updateBookingStatus,
  getDashboardSummary,
  getBookingTrends,
  getPerformanceMetrics,
} from "../services/bookingService.js";

// Mock Booking Model
vi.mock("../models/bookingModel.js", () => ({
  createBooking: vi.fn(),
  getBookingById: vi.fn(),
  updateBookingStatus: vi.fn(),
  getAllBookings: vi.fn(),
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
        status: "Completed",
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

/* =====================================================
   Analytics Service Unit Tests
===================================================== */

describe("Analytics Service", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("getDashboardSummary()", () => {
    test("should return dashboard summary", () => {
      bookingModel.getAllBookings.mockReturnValue([
        {
          id: 1,
          clientName: "Franklin",
          eventDate: "2026-01-15",
          month: "Jan",
          amount: 30000,
          rating: 5,
          status: "Completed",
        },
        {
          id: 2,
          clientName: "Jeric",
          eventDate: "2026-02-10",
          month: "Feb",
          amount: 15000,
          rating: 4,
          status: "Completed",
        },
        {
          id: 3,
          clientName: "Mark",
          eventDate: "2026-03-08",
          month: "Mar",
          amount: 3500,
          rating: 5,
          status: "Pending",
        },
      ]);

      const result = getDashboardSummary();

      expect(result).toEqual({
        totalBookings: 3,
        completed: 2,
        pending: 1,
        totalClients: 3,
        totalRevenue: 48500,
      });

      expect(bookingModel.getAllBookings).toHaveBeenCalledTimes(1);
    });
  });

  describe("getBookingTrends()", () => {
    test("should return booking trends", () => {
      bookingModel.getAllBookings.mockReturnValue([
        { month: "Jan" },
        { month: "Jan" },
        { month: "Feb" },
        { month: "Mar" },
        { month: "Mar" },
        { month: "Mar" },
      ]);

      const result = getBookingTrends();

      expect(result).toEqual([
        { month: "Jan", bookings: 2 },
        { month: "Feb", bookings: 1 },
        { month: "Mar", bookings: 3 },
        { month: "Apr", bookings: 0 },
        { month: "May", bookings: 0 },
        { month: "Jun", bookings: 0 },
      ]);

      expect(bookingModel.getAllBookings).toHaveBeenCalledTimes(1);
    });
  });

  describe("getPerformanceMetrics()", () => {
    test("should return performance metrics", () => {
      bookingModel.getAllBookings.mockReturnValue([
        {
          status: "Completed",
          rating: 5,
        },
        {
          status: "Completed",
          rating: 4,
        },
        {
          status: "Pending",
          rating: 5,
        },
      ]);

      const result = getPerformanceMetrics();

      expect(result).toEqual({
        bookingCompletionRate: 67,
        clientSatisfaction: 5,
      });

      expect(bookingModel.getAllBookings).toHaveBeenCalledTimes(1);
    });
  });
});