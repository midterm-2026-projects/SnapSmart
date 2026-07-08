import { describe, test, expect, beforeEach } from "vitest";
import request from "supertest";
import app from "../app.js";
import { bookings } from "../models/bookingModel.js";

describe("Booking API Integration Test", () => {
  beforeEach(() => {
    bookings.length = 0;
  });

  describe("POST /bookings", () => {
    test("should create a booking successfully", async () => {
      const response = await request(app)
        .post("/bookings")
        .send({
          clientName: "Franklin",
          eventDate: "2026-07-20",
        });

      expect(response.status).toBe(201);

      expect(response.body.message).toBe(
        "Booking created successfully"
      );

      expect(response.body.data.clientName).toBe("Franklin");

      expect(response.body.data.status).toBe("Pending");

      expect(bookings.length).toBe(1);
    });
  });

  describe("GET /bookings/:id", () => {
    test("should return booking by ID", async () => {
      await request(app)
        .post("/bookings")
        .send({
          clientName: "Franklin",
          eventDate: "2026-07-20",
        });

      const response = await request(app)
        .get("/bookings/1");

      expect(response.status).toBe(200);

      expect(response.body.message).toBe(
        "Booking retrieved successfully"
      );

      expect(response.body.data.id).toBe(1);

      expect(response.body.data.clientName).toBe("Franklin");
    });

    test("should return 404 when booking does not exist", async () => {
      const response = await request(app)
        .get("/bookings/99");

      expect(response.status).toBe(404);

      expect(response.body.message).toBe("Booking not found");
    });
  });

  describe("PUT /bookings/:id/status", () => {
    test("should update booking status", async () => {
      await request(app)
        .post("/bookings")
        .send({
          clientName: "Franklin",
          eventDate: "2026-07-20",
        });

      const response = await request(app)
        .put("/bookings/1/status")
        .send({
          status: "Approved",
        });

      expect(response.status).toBe(200);

      expect(response.body.message).toBe(
        "Booking status updated successfully"
      );

      expect(response.body.data.status).toBe("Approved");

      expect(bookings[0].status).toBe("Approved");
    });

    test("should return 404 when booking is not found", async () => {
      const response = await request(app)
        .put("/bookings/99/status")
        .send({
          status: "Approved",
        });

      expect(response.status).toBe(404);

      expect(response.body.message).toBe("Booking not found");
    });
  });
});