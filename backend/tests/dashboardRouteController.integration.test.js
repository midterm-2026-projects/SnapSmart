import {
  describe,
  test,
  expect,
  beforeEach,
} from "vitest";

import request from "supertest";

import app from "../app.js";

import { bookings } from "../models/bookingModel.js";

describe("Dashboard API Integration Test", () => {

  beforeEach(() => {
    bookings.length = 0;
  });

  describe("GET /dashboard/revenue", () => {

    test("should return total revenue successfully", async () => {

      await request(app)
        .post("/bookings")
        .send({
          clientName: "Franklin",
          eventDate: "2026-07-20",
          month: "Jul",
          amount: 5000,
          expense: 2000,
          rating: 5,
        });

      const response = await request(app)
        .get("/dashboard/revenue");

      expect(response.status).toBe(200);

      expect(response.body.success).toBe(true);

      expect(response.body.data.revenue).toBe(5000);

    });

    test("should return 400 when no booking data available", async () => {

      const response = await request(app)
        .get("/dashboard/revenue");

      expect(response.status).toBe(400);

      expect(response.body.success).toBe(false);

      expect(response.body.message).toBe(
        "No booking data available"
      );

    });

  });

  describe("GET /dashboard/expenses", () => {

    test("should return total expenses successfully", async () => {

      await request(app)
        .post("/bookings")
        .send({
          clientName: "Franklin",
          eventDate: "2026-07-20",
          month: "Jul",
          amount: 5000,
          expense: 2000,
          rating: 5,
        });

      const response = await request(app)
        .get("/dashboard/expenses");

      expect(response.status).toBe(200);

      expect(response.body.success).toBe(true);

      expect(response.body.data.expenses).toBe(2000);

    });

    test("should return 400 when no booking data available", async () => {

      const response = await request(app)
        .get("/dashboard/expenses");

      expect(response.status).toBe(400);

      expect(response.body.success).toBe(false);

      expect(response.body.message).toBe(
        "No booking data available"
      );

    });

  });

  describe("GET /dashboard/profit", () => {

    test("should return total profit successfully", async () => {

      await request(app)
        .post("/bookings")
        .send({
          clientName: "Franklin",
          eventDate: "2026-07-20",
          month: "Jul",
          amount: 5000,
          expense: 2000,
          rating: 5,
        });

      const response = await request(app)
        .get("/dashboard/profit");

      expect(response.status).toBe(200);

      expect(response.body.success).toBe(true);

      expect(response.body.data.profit).toBe(3000);

    });

    test("should return 400 when no booking data available", async () => {

      const response = await request(app)
        .get("/dashboard/profit");

      expect(response.status).toBe(400);

      expect(response.body.success).toBe(false);

      expect(response.body.message).toBe(
        "No booking data available"
      );

    });

  });

});