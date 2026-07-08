export const bookings = [];

export function createBooking(data) {
  const booking = {
    id: bookings.length + 1,
    ...data,
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