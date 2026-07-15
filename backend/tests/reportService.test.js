import { describe, test, expect, vi, beforeEach } from "vitest";

import * as bookingModel from "../models/bookingModel.js";

import {
  generateReport,
  getGeneratedReports,
  downloadReport,
  clearGeneratedReports,
} from "../services/reportService.js";

// Mock the Model
vi.mock("../models/bookingModel.js", () => ({
  getAllBookings: vi.fn(),
}));

describe("Report Service", () => {

  beforeEach(() => {
    vi.clearAllMocks();
    clearGeneratedReports();
  });

  describe("generateReport()", () => {

    test("should generate report successfully", () => {

      bookingModel.getAllBookings.mockReturnValue([
        {
          id: 1,
          clientName: "John",
          status: "Completed",
          amount: 5000,
        },
        {
          id: 2,
          clientName: "Mary",
          status: "Pending",
          amount: 3000,
        },
        {
          id: 3,
          clientName: "Peter",
          status: "Cancelled",
          amount: 2000,
        },
      ]);

      const report = generateReport();

      expect(report.totalBookings).toBe(3);
      expect(report.completedBookings).toBe(1);
      expect(report.pendingBookings).toBe(1);
      expect(report.cancelledBookings).toBe(1);
      expect(report.totalRevenue).toBe(10000);

      expect(bookingModel.getAllBookings).toHaveBeenCalled();

    });

    test("should generate report when no booking data exists", () => {

      bookingModel.getAllBookings.mockReturnValue([]);

      const report = generateReport();

      expect(report.totalBookings).toBe(0);
      expect(report.completedBookings).toBe(0);
      expect(report.pendingBookings).toBe(0);
      expect(report.cancelledBookings).toBe(0);
      expect(report.totalRevenue).toBe(0);

      expect(bookingModel.getAllBookings).toHaveBeenCalled();

    });

  });

  describe("getGeneratedReports()", () => {

    test("should return generated reports", () => {

      bookingModel.getAllBookings.mockReturnValue([
        {
          id: 1,
          clientName: "John",
          status: "Completed",
          amount: 5000,
        },
      ]);

      generateReport();

      const reports = getGeneratedReports();

      expect(Array.isArray(reports)).toBe(true);
      expect(reports.length).toBe(1);
      expect(reports[0].id).toBe(1);
      expect(reports[0].totalBookings).toBe(1);

    });

  });

  describe("downloadReport()", () => {

    test("should download report successfully", () => {

      bookingModel.getAllBookings.mockReturnValue([
        {
          id: 1,
          clientName: "John",
          status: "Completed",
          amount: 5000,
        },
      ]);

      const generatedReport = generateReport();

      const report = downloadReport(generatedReport.id);

      expect(report).toEqual(generatedReport);

    });

    test("should throw error when report is not found", () => {

      expect(() =>
        downloadReport(999)
      ).toThrow("Report not found");

    });

  });

});