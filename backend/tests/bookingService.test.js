import { describe, test, expect } from "vitest";

import {
    createBooking,
    getBookingById,
    updateBookingStatus
} from "../services/bookingService.js";

describe("Booking Service", () => {

    test("createBooking() valid input", () => {

        const booking = createBooking({

            clientName: "Franklin",
            eventDate: "2026-07-10"

        });

        expect(booking.clientName).toBe("Franklin");

    });

    test("createBooking() invalid input", () => {

        expect(() =>

            createBooking({})

        ).toThrow("Client Name is required");

    });

    test("getBookingById()", () => {

        const booking = getBookingById(1);

        expect(booking.id).toBe(1);

    });

    test("updateBookingStatus()", () => {

        const booking = updateBookingStatus(
            1,
            "Approved"
        );

        expect(booking.status).toBe("Approved");

    });

});