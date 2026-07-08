// Mock Database
export const bookings = [];

// Create Booking
export function createBooking(data) {
  const booking = {
    id: bookings.length + 1,
    ...data,
    status: "Pending",
  };

  bookings.push(booking);

  return booking;
}

// Get Booking by ID
export function getBookingById(id) {
  return bookings.find((booking) => booking.id === Number(id));
}

// Update Booking Status
export function updateBookingStatus(id, status) {
  const booking = getBookingById(id);

  if (!booking) {
    return null;
  }

  booking.status = status;

  return booking;
}

// NEW
export function getAllBookings() {
  return bookings;
}