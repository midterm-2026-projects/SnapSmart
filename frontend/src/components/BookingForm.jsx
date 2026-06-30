import { useState } from "react";
import ClientInformation from "./ClientInformation";
import EventInformation from "./EventInformation";

function BookingForm() {
  const [client, setClient] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
  });

  const [event, setEvent] = useState({
    eventType: "",
    eventDate: "",
    venue: "",
  });

  const [errors, setErrors] = useState({});

  const clearError = (field) => {
    setErrors((prev) => {
      const updated = { ...prev };
      delete updated[field];
      return updated;
    });
  };

  return (
    <div>
      <h2>Booking Form</h2>

      <ClientInformation
        client={client}
        setClient={setClient}
        errors={errors}
        setErrors={setErrors}
        clearError={clearError}
      />

      <EventInformation
        event={event}
        setEvent={setEvent}
        errors={errors}
        setErrors={setErrors}
        clearError={clearError}
      />
    </div>
  );
}

export default BookingForm;