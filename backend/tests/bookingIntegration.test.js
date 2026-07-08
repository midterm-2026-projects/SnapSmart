import { describe, test, expect, beforeEach } from "vitest";
import request from "supertest";
import app from "../app.js";
import { bookings } from "../models/bookingModel.js";

describe("Booking API Integration Test", () => {
  beforeEach(() => {
    bookings.length = 0;
  });

  
  test("POST /bookings should create a booking", async () => {
    const response = await request(app)
      .post("/bookings")
      .send({
        clientName: "Franklin",
        eventDate: "2026-07-20",
      });

    expect(response.status).toBe(201);

    expect(response.body.clientName).toBe("Franklin");

    expect(response.body.status).toBe("Pending");

    expect(bookings.length).toBe(1);
  });

  test("GET /bookings/:id should return booking", async () => {
    await request(app)
      .post("/bookings")
      .send({
        clientName: "Franklin",
        eventDate: "2026-07-20",
      });

    const response = await request(app).get("/bookings/1");

    expect(response.status).toBe(200);

    expect(response.body.id).toBe(1);

    expect(response.body.clientName).toBe("Franklin");
  });

  test("PUT /bookings/:id/status should update booking status", async () => {
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

    expect(response.body.status).toBe("Approved");

    expect(bookings[0].status).toBe("Approved");
  });
});