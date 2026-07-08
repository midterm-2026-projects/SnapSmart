import { describe, test, expect, vi, beforeEach } from "vitest";
import axios from "axios";

import {
  createBooking,
  getBookingById,
  updateBookingStatus,
} from "../services/bookingService.js";

vi.mock("axios");

describe("Booking Service", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("createBooking() should create a booking", async () => {
    const booking = {
      id: 1,
      clientName: "Franklin",
      eventDate: "2026-07-20",
      status: "Pending",
    };

    axios.post.mockResolvedValue({
      data: booking,
    });

    const result = await createBooking(booking);

    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(result.clientName).toBe("Franklin");
  });

  test("getBookingById() should return booking", async () => {
    axios.get.mockResolvedValue({
      data: {
        id: 1,
        clientName: "Franklin",
      },
    });

    const result = await getBookingById(1);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(result.id).toBe(1);
  });

  test("updateBookingStatus() should update booking status", async () => {
    axios.put.mockResolvedValue({
      data: {
        id: 1,
        status: "Approved",
      },
    });

    const result = await updateBookingStatus(1, "Approved");

    expect(axios.put).toHaveBeenCalledTimes(1);
    expect(result.status).toBe("Approved");
  });
});