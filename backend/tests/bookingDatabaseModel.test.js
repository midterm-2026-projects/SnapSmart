import { describe, it, expect, vi, beforeEach } from "vitest";


const { mockFrom, mockSelect } = vi.hoisted(() => {

  const mockSelect = vi.fn();

  const mockFrom = vi.fn(() => ({
    select: mockSelect,
  }));

  return {
    mockFrom,
    mockSelect,
  };

});


vi.mock("../config/supabaseClient.js", () => ({
  default: {
    from: mockFrom,
  },
}));


import bookingDatabaseModel from "../models/bookingDatabaseModel.js";


describe("Booking Database Model - getAllBookings", () => {


  beforeEach(() => {
    vi.clearAllMocks();
  });



  it("should return all bookings successfully", async () => {

    const mockBookings = [
      {
        id: 1,
        customer_id: 10,
        package_id: 2,
        status: "pending",
        payment_status: "paid",
      },
    ];


    mockSelect.mockResolvedValue({
      data: mockBookings,
      error: null,
    });


    const result = await bookingDatabaseModel.getAllBookings();


    expect(result).toEqual(mockBookings);
    expect(mockFrom).toHaveBeenCalledWith("bookings");

  });



  it("should throw error when fetching bookings fails", async () => {


    mockSelect.mockResolvedValue({
      data: null,
      error: {
        message: "Database error",
      },
    });


    await expect(
      bookingDatabaseModel.getAllBookings()
    ).rejects.toThrow("Database error");


  });


});