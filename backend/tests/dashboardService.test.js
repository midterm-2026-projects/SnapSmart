import { describe, test, expect, vi, beforeEach } from "vitest";

import * as bookingModel from "../models/bookingModel.js";

import {
  getDashboardSummary,
  getBookingTrends,
  getPerformanceMetrics,
  calculateRevenue,
  calculateExpenses,
  calculateProfit,
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
          clientName: "Franklin",
          status: "Completed",
          amount: 30000,
          expense: 12000,
          month: "Jan",
          rating: 5,
        },
        {
          clientName: "Jeric",
          status: "Completed",
          amount: 15000,
          expense: 6000,
          month: "Feb",
          rating: 4,
        },
        {
          clientName: "Jhon Charlie",
          status: "Pending",
          amount: 3500,
          expense: 1000,
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

      expect(() => getDashboardSummary()).toThrow(
        "No booking data available"
      );
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

      expect(result).toEqual({
        Jan: 2,
        Feb: 1,
        Mar: 3,
      });
    });

    test("should throw error when no booking data exists", () => {
      bookingModel.getAllBookings.mockReturnValue([]);

      expect(() => getBookingTrends()).toThrow(
        "No booking data available"
      );
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
        completionRate: (2 / 3) * 100,
        averageRating: (5 + 4 + 5) / 3,
      });
    });

    test("should throw error when no booking data exists", () => {
      bookingModel.getAllBookings.mockReturnValue([]);

      expect(() => getPerformanceMetrics()).toThrow(
        "No booking data available"
      );
    });
  });

  describe("Financial Analytics", () => {
    describe("calculateRevenue()", () => {
      test("should calculate total revenue", () => {
        bookingModel.getAllBookings.mockReturnValue([
          { amount: 30000 },
          { amount: 15000 },
          { amount: 3500 },
        ]);

        expect(calculateRevenue()).toBe(48500);
      });

      test("should throw error when no booking data exists", () => {
        bookingModel.getAllBookings.mockReturnValue([]);

        expect(() => calculateRevenue()).toThrow(
          "No booking data available"
        );
      });
    });

    describe("calculateExpenses()", () => {
      test("should calculate total expenses", () => {
        bookingModel.getAllBookings.mockReturnValue([
          { expense: 12000 },
          { expense: 6000 },
          { expense: 1000 },
        ]);

        expect(calculateExpenses()).toBe(19000);
      });

      test("should throw error when no booking data exists", () => {
        bookingModel.getAllBookings.mockReturnValue([]);

        expect(() => calculateExpenses()).toThrow(
          "No booking data available"
        );
      });
    });

    describe("calculateProfit()", () => {
      test("should calculate net profit", () => {
        bookingModel.getAllBookings.mockReturnValue([
          {
            amount: 30000,
            expense: 12000,
          },
          {
            amount: 15000,
            expense: 6000,
          },
          {
            amount: 3500,
            expense: 1000,
          },
        ]);

        expect(calculateProfit()).toBe(29500);
      });

      test("should throw error when no booking data exists", () => {
        bookingModel.getAllBookings.mockReturnValue([]);

        expect(() => calculateProfit()).toThrow(
          "No booking data available"
        );
      });
    });
  });
});