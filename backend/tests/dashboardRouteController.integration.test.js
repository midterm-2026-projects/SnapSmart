import {
  describe,
  test,
  expect,
} from "vitest";

import request from "supertest";
import app from "../app.js";

describe("Dashboard Financial Analytics API Integration Test", () => {

  // ==============================
  // Revenue API
  // ==============================
  describe("GET /dashboard/revenue", () => {

    test("should return total revenue from database successfully", async () => {
      const response = await request(app)
        .get("/dashboard/revenue");

      expect(response.status).toBe(200);

      expect(response.body.success).toBe(true);

      expect(response.body.data).toHaveProperty("revenue");

      expect(typeof response.body.data.revenue).toBe("number");

      expect(response.body.data.revenue).toBeGreaterThanOrEqual(0);
    });

  });

  // ==============================
  // Expenses API
  // ==============================
  describe("GET /dashboard/expenses", () => {

    test("should return total expenses successfully", async () => {
      const response = await request(app)
        .get("/dashboard/expenses");

      expect(response.status).toBe(200);

      expect(response.body.success).toBe(true);

      expect(response.body.data).toHaveProperty("expenses");

      expect(typeof response.body.data.expenses).toBe("number");

      expect(response.body.data.expenses).toBeGreaterThanOrEqual(0);
    });

  });

  // ==============================
  // Profit API
  // ==============================
  describe("GET /dashboard/profit", () => {

    test("should return total profit successfully", async () => {
      const response = await request(app)
        .get("/dashboard/profit");

      expect(response.status).toBe(200);

      expect(response.body.success).toBe(true);

      expect(response.body.data).toHaveProperty("profit");

      expect(typeof response.body.data.profit).toBe("number");
    });

  });

  // ==============================
  // Financial Calculation Consistency
  // ==============================
  describe("Financial Analytics Consistency", () => {

    test("profit should equal revenue minus expenses", async () => {
      const revenueResponse = await request(app)
        .get("/dashboard/revenue");

      const expensesResponse = await request(app)
        .get("/dashboard/expenses");

      const profitResponse = await request(app)
        .get("/dashboard/profit");

      expect(revenueResponse.status).toBe(200);
      expect(expensesResponse.status).toBe(200);
      expect(profitResponse.status).toBe(200);

      const revenue =
        revenueResponse.body.data.revenue;

      const expenses =
        expensesResponse.body.data.expenses;

      const profit =
        profitResponse.body.data.profit;

      expect(profit).toBe(revenue - expenses);
    });

  });

});