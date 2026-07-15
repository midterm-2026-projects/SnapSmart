import { describe, test, expect, vi, beforeEach } from "vitest";

import * as bookingModel from "../models/bookingModel.js";

import {
  getDashboardSummary,
  getBookingTrends,
  getPerformanceMetrics,
} from "../services/dashboardService.js";

vi.mock("../models/bookingModel.js", () => ({
  getAllBookings: vi.fn(),
}));

describe("Dashboard Service", () => {

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("getDashboardSummary()", () => {

    test("should return dashboard summary", () => {

      bookingModel.getAllBookings.mockReturnValue([
        {
          status: "Completed",
          amount: 30000,
          month: "Jan",
          rating: 5,
        },
        {
          status: "Completed",
          amount: 15000,
          month: "Feb",
          rating: 4,
        },
        {
          status: "Pending",
          amount: 3500,
          month: "Mar",
          rating: 5,
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

    test("should throw error when no booking data exists", () => {

      bookingModel.getAllBookings.mockReturnValue([]);

      expect(() =>
        getDashboardSummary()
      ).toThrow("No booking data available");

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

    test("should throw error when no booking data exists", () => {

      bookingModel.getAllBookings.mockReturnValue([]);

      expect(() =>
        getBookingTrends()
      ).toThrow("No booking data available");

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

    });

    test("should throw error when no booking data exists", () => {

      bookingModel.getAllBookings.mockReturnValue([]);

      expect(() =>
        getPerformanceMetrics()
      ).toThrow("No booking data available");

    });

  });

});