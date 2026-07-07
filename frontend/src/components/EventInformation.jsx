import { useState } from "react";

function EventInformation({
  event,
  setEvent,
  errors,
  setErrors,
}) {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const newErrors = {};

    if (!event.eventType.trim()) {
      newErrors.eventType = "Event Type is required";
    }

    if (!event.eventDate) {
      newErrors.eventDate = "Event Date is required";
    }

    if (!event.venue.trim()) {
      newErrors.venue = "Venue is required";
    }

    setErrors((prev) => ({
      ...prev,
      ...newErrors,
    }));

    const allEmpty =
      !event.eventType.trim() &&
      !event.eventDate &&
      !event.venue.trim();

    const allComplete =
      event.eventType.trim() &&
      event.eventDate &&
      event.venue.trim();

    if (allEmpty) {
      setMessage(
        "Please complete all Event Information fields."
      );
      return;
    }

    if (!allComplete) {
      setMessage(
        "Please complete the missing Event Information fields."
      );
      return;
    }

    setMessage(
      "Event Information Submitted Successfully!"
    );
  };

  return (
    <div>
      <h3>Event Information</h3>

      <div className="field-group">
        <input
          type="text"
          placeholder="Event Type"
          value={event.eventType}
          onChange={(e) => {
            const value = e.target.value;

            setEvent({
              ...event,
              eventType: value,
            });

            if (value.trim()) {
              setErrors((prev) => ({
                ...prev,
                eventType: "",
              }));
            }
          }}
        />

        {errors.eventType && (
          <p className="error">
            {errors.eventType}
          </p>
        )}
      </div>

      <div className="field-group">
        <input
          type="date"
          value={event.eventDate}
          onChange={(e) => {
            const value = e.target.value;

            setEvent({
              ...event,
              eventDate: value,
            });

            if (value) {
              setErrors((prev) => ({
                ...prev,
                eventDate: "",
              }));
            }
          }}
        />

        {errors.eventDate && (
          <p className="error">
            {errors.eventDate}
          </p>
        )}
      </div>

      <div className="field-group">
        <input
          type="text"
          placeholder="Venue"
          value={event.venue}
          onChange={(e) => {
            const value = e.target.value;

            setEvent({
              ...event,
              venue: value,
            });

            if (value.trim()) {
              setErrors((prev) => ({
                ...prev,
                venue: "",
              }));
            }
          }}
        />

        {errors.venue && (
          <p className="error">
            {errors.venue}
          </p>
        )}
      </div>

      <button
        type="button"
        onClick={handleSubmit}
      >
        Submit Event Booking
      </button>

      {message && (
        <p
          className={
            message.includes("Successfully")
              ? "success"
              : "error"
          }
        >
          {message}
        </p>
      )}
    </div>
  );
}

export default EventInformation;