export const bookings = [
  {
    id: 1,
    clientName: "Franklin",
    eventDate: "2026-01-15",
    month: "Jan",
    amount: 30000,
    rating: 5,
    status: "Completed",
  },
  {
    id: 2,
    clientName: "Jeric",
    eventDate: "2026-02-10",
    month: "Feb",
    amount: 15000,
    rating: 4,
    status: "Completed",
  },
  {
    id: 3,
    clientName: "Mark",
    eventDate: "2026-03-08",
    month: "Mar",
    amount: 3500,
    rating: 5,
    status: "Pending",
  },
];

export function createBooking(data) {
  const booking = {
    id: bookings.length + 1,
    clientName: data.clientName,
    eventDate: data.eventDate,
    month: data.month,
    amount: data.amount,
    rating: data.rating,
    status: "Pending",
  };

  bookings.push(booking);

  return booking;
}

export function getBookingById(id) {
  return bookings.find((booking) => booking.id === Number(id));
}

export function updateBookingStatus(id, status) {
  const booking = getBookingById(id);

  if (!booking) {
    return null;
  }

  booking.status = status;

  return booking;
}

export function getAllBookings() {
  return bookings;
}