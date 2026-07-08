import { describe, it, expect, vi, beforeEach } from "vitest";

import * as bookingModel from "../models/bookingModel.js";
import analyticsService from "../services/analyticsService.js";

vi.mock("../models/bookingModel.js");

describe("Analytics Service", () => {

    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe("getDashboardSummary()", () => {

        it("should return dashboard summary", () => {

            bookingModel.getAllBookings.mockReturnValue([
                {
                    status: "Completed",
                    amount: 30000,
                    month: "Jan"
                },
                {
                    status: "Completed",
                    amount: 15000,
                    month: "Feb"
                },
                {
                    status: "Pending",
                    amount: 3500,
                    month: "Mar"
                }
            ]);

            const result = analyticsService.getDashboardSummary();

            expect(result).toEqual({
                totalBookings: 3,
                completed: 2,
                pending: 1,
                totalClients: 3,
                totalRevenue: 48500
            });

        });

    });

    describe("getBookingTrends()", () => {

        it("should return booking trends", () => {

            bookingModel.getAllBookings.mockReturnValue([
                { month: "Jan" },
                { month: "Jan" },
                { month: "Feb" },
                { month: "Mar" },
                { month: "Mar" },
                { month: "Mar" }
            ]);

            const result = analyticsService.getBookingTrends();

            expect(result).toEqual([
                { month: "Jan", bookings: 2 },
                { month: "Feb", bookings: 1 },
                { month: "Mar", bookings: 3 },
                { month: "Apr", bookings: 0 },
                { month: "May", bookings: 0 },
                { month: "Jun", bookings: 0 }
            ]);

        });

    });

    describe("getPerformanceMetrics()", () => {

        it("should return performance metrics", () => {

            bookingModel.getAllBookings.mockReturnValue([
                { status: "Completed" },
                { status: "Completed" },
                { status: "Pending" }
            ]);

            const result = analyticsService.getPerformanceMetrics();

            expect(result).toEqual({
                bookingCompletionRate: 67,
                clientSatisfaction: 92,
                revenueGrowth: 68,
                serviceQualityScore: 88
            });

        });

    });

});