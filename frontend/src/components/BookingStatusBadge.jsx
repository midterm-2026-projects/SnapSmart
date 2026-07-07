import { useState } from "react";

function BookingStatusBadge({ status }) {
  const [bookingStatus, setBookingStatus] =
    useState(status);

  const handleChangeStatus = () => {
    if (bookingStatus === "Pending") {
      setBookingStatus("Confirmed");
    } else {
      setBookingStatus("Pending");
    }
  };

  return (
    <div>
      <h2>Booking Status</h2>

      <p>
        <strong>Status:</strong>{" "}
        {bookingStatus}
      </p>

      <button
        type="button"
        onClick={handleChangeStatus}
      >
        Change Status
      </button>
    </div>
  );
}

export default BookingStatusBadge;