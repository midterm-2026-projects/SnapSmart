import { describe, it, expect, vi } from "vitest";
import analyticsModel from "../models/analyticsModel.js";
import analyticsService from "../services/analyticsService.js";

vi.mock("../models/analyticsModel.js");

describe("Analytics Service", () => {

    describe("getDashboardSummary()", () => {

        it("should return dashboard summary", () => {

            analyticsModel.getDashboardSummary.mockReturnValue({
                totalBookings: 24,
                completed: 18,
                pending: 4,
                totalClients: 35,
                totalRevenue: 48500
            });

            const result = analyticsService.getDashboardSummary();

            expect(result).toEqual({
                totalBookings: 24,
                completed: 18,
                pending: 4,
                totalClients: 35,
                totalRevenue: 48500
            });

        });

    });

    describe("getBookingTrends()", () => {

        it("should return booking trends", () => {

            analyticsModel.getBookingTrends.mockReturnValue([
                { month: "Jan", bookings: 12 },
                { month: "Feb", bookings: 18 },
                { month: "Mar", bookings: 15 }
            ]);

            const result = analyticsService.getBookingTrends();

            expect(result).toEqual([
                { month: "Jan", bookings: 12 },
                { month: "Feb", bookings: 18 },
                { month: "Mar", bookings: 15 }
            ]);

        });

    });

    describe("getPerformanceMetrics()", () => {

        it("should return performance metrics", () => {

            analyticsModel.getPerformanceMetrics.mockReturnValue({
                bookingCompletionRate: 85,
                clientSatisfaction: 92,
                revenueGrowth: 68,
                serviceQualityScore: 88
            });

            const result = analyticsService.getPerformanceMetrics();

            expect(result).toEqual({
                bookingCompletionRate: 85,
                clientSatisfaction: 92,
                revenueGrowth: 68,
                serviceQualityScore: 88
            });

        });

    });

});