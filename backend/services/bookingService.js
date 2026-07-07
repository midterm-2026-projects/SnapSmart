import { bookings } from "../config/db.js";

export function createBooking(data) {

    if (!data.clientName)
        throw new Error("Client Name is required");

    if (!data.eventDate)
        throw new Error("Event Date is required");

    const booking = {
        id: bookings.length + 1,
        ...data,
        status: "Pending"
    };

    bookings.push(booking);

    return booking;
}

export function getBookingById(id) {

    return bookings.find(
        booking => booking.id === Number(id)
    );

}

export function updateBookingStatus(id, status) {

    const booking = getBookingById(id);

    if (!booking)
        throw new Error("Booking not found");

    booking.status = status;

    return booking;
}