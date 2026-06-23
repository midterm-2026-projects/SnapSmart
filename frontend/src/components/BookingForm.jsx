import ClientInformation from "./ClientInformation";
import EventInformation from "./EventInformation";

function BookingForm() {
  return (
    <div>
      <h2>Booking Form</h2>

      <ClientInformation />
      <EventInformation />

      <button type="submit">
        Submit Booking
      </button>
    </div>
  );
}

export default BookingForm;