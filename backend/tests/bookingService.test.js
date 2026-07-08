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

// Mock the Model
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
        id: 1,
        clientName: "Franklin",
        eventDate: "2026-07-20",
        status: "Pending",
      });

      const booking = createBooking({
        clientName: "Franklin",
        eventDate: "2026-07-20",
      });

      expect(booking.clientName).toBe("Franklin");

      expect(bookingModel.createBooking).toHaveBeenCalledWith({
        clientName: "Franklin",
        eventDate: "2026-07-20",
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

/* =====================================================
   Analytics Service Unit Tests
   Objective 2 - Week 3 Day 1
===================================================== */

describe("Analytics Service", () => {

  describe("getDashboardSummary()", () => {

    test("should return dashboard summary", () => {

      bookingModel.getAllBookings.mockReturnValue([
        {
          status: "Completed",
          amount: 30000,
          month: "Jan",
        },
        {
          status: "Completed",
          amount: 15000,
          month: "Feb",
        },
        {
          status: "Pending",
          amount: 3500,
          month: "Mar",
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

    });

  });

  describe("getPerformanceMetrics()", () => {

    test("should return performance metrics", () => {

      bookingModel.getAllBookings.mockReturnValue([
        { status: "Completed" },
        { status: "Completed" },
        { status: "Pending" },
      ]);

      const result = getPerformanceMetrics();

      expect(result).toEqual({
        bookingCompletionRate: 67,
        clientSatisfaction: 92,
        revenueGrowth: 68,
        serviceQualityScore: 88,
      });

    });

  });

});