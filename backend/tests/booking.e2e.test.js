import request from "supertest";
import { describe, test, expect } from "vitest";
import app from "../app.js";

describe("Booking End-to-End Tests", () => {
  test("should create a booking successfully", async () => {
    const response = await request(app)
      .post("/bookings")
      .send({
        clientName: "John Doe",
        eventDate: "2026-08-15",
        month: "August",
        amount: 5000,
        expense: 2000,
        rating: 5,
      });

    expect(response.status).toBe(201);

    expect(response.body.message).toBe(
      "Booking created successfully"
    );

    expect(response.body.data.clientName).toBe("John Doe");

    expect(response.body.data.status).toBe("Pending");
  });
});

test("should reject booking when client name is missing", async () => {
  const response = await request(app)
    .post("/bookings")
    .send({
      clientName: "",
      eventDate: "2026-08-15",
      month: "August",
      amount: 5000,
      expense: 2000,
      rating: 5,
    });

  expect(response.status).toBe(400);

  expect(response.body.message).toBe(
    "Client Name is required"
  );
});

test("should retrieve a booking by ID", async () => {
  // Create a booking first
  const createResponse = await request(app)
    .post("/bookings")
    .send({
      clientName: "Jane Doe",
      eventDate: "2026-09-20",
      month: "September",
      amount: 6000,
      expense: 2500,
      rating: 5,
    });

  const bookingId = createResponse.body.data.id;

  // Retrieve the booking
  const response = await request(app).get(`/bookings/${bookingId}`);

  expect(response.status).toBe(200);

  expect(response.body.message).toBe(
    "Booking retrieved successfully"
  );

  expect(response.body.data.id).toBe(bookingId);
  expect(response.body.data.clientName).toBe("Jane Doe");
});

test("should update booking status successfully", async () => {
  // Create a booking first
  const createResponse = await request(app)
    .post("/bookings")
    .send({
      clientName: "Mark Cruz",
      eventDate: "2026-10-10",
      month: "October",
      amount: 8000,
      expense: 3000,
      rating: 5,
    });

  const bookingId = createResponse.body.data.id;

  // Update the booking status
  const response = await request(app)
    .put(`/bookings/${bookingId}/status`)
    .send({
      status: "Confirmed",
    });

  expect(response.status).toBe(200);

  expect(response.body.message).toBe(
    "Booking status updated successfully"
  );

  expect(response.body.data.status).toBe("Confirmed");
});

test("should return 404 when booking does not exist", async () => {
  const response = await request(app).put("/bookings/9999/status").send({
    status: "Confirmed",
  });

  expect(response.status).toBe(404);

  expect(response.body.message).toBe("Booking not found");
});