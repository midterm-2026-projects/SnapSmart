import axios from "axios";

const API_URL = "http://localhost:3000";

export const createBooking = async (bookingData) => {
  const response = await axios.post(`${API_URL}/bookings`, bookingData);
  return response.data;
};

export const getBookingById = async (id) => {
  const response = await axios.get(`${API_URL}/bookings/${id}`);
  return response.data;
};

export const updateBookingStatus = async (id, status) => {
  const response = await axios.put(
    `${API_URL}/bookings/${id}/status`,
    { status }
  );

  return response.data;
};