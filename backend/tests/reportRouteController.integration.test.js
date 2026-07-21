import {
  describe,
  test,
  expect,
  beforeEach,
} from "vitest";

import request from "supertest";
import app from "../app.js";

import { bookings } from "../models/bookingModel.js";

describe("Report API Integration Test", () => {

  beforeEach(() => {
    bookings.length = 0;
  });

  describe("POST /reports/generate", () => {

    test("should generate report successfully", async () => {

      await request(app)
        .post("/bookings")
        .send({
          clientName: "Franklin",
          eventDate: "2026-07-20",
          month: "Jul",
          amount: 5000,
          rating: 5,
        });

      const response = await request(app)
        .post("/reports/generate");

      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.data.totalBookings).toBe(1);
      expect(response.body.data.completedBookings).toBe(0);
      expect(response.body.data.pendingBookings).toBe(1);
      expect(response.body.data.totalRevenue).toBe(5000);

    });

  });

  describe("GET /reports", () => {

    test("should return all generated reports", async () => {

      await request(app)
        .post("/bookings")
        .send({
          clientName: "Franklin",
          eventDate: "2026-07-20",
          month: "Jul",
          amount: 5000,
          rating: 5,
        });

      await request(app)
        .post("/reports/generate");

      const response = await request(app)
        .get("/reports");

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(Array.isArray(response.body.data)).toBe(true);
      expect(response.body.data.length).toBeGreaterThan(0);

    });

  });

  describe("GET /reports/:id", () => {

    test("should return report by ID", async () => {

      await request(app)
        .post("/bookings")
        .send({
          clientName: "Franklin",
          eventDate: "2026-07-20",
          month: "Jul",
          amount: 5000,
          rating: 5,
        });

      const generateResponse = await request(app)
        .post("/reports/generate");

      expect(generateResponse.status).toBe(201);

      const reportId = generateResponse.body.data.id;

      const response = await request(app)
        .get(`/reports/${reportId}`);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.id).toBe(reportId);
      expect(response.body.data.totalBookings).toBe(1);

    });

    test("should return 404 when report does not exist", async () => {

      const response = await request(app)
        .get("/reports/999");

      expect(response.status).toBe(404);
      expect(response.body.success).toBe(false);
      expect(response.body.message).toBe("Report not found");

    });

  });

});