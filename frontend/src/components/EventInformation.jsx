import { useState } from "react";

function EventInformation() {
  const [eventDate, setEventDate] = useState("");

  return (
    <div>
      <h3>Event Information</h3>

      <input
        type="text"
        placeholder="Event Type"
      />

      <input
        type="date"
        value={eventDate}
        onChange={(e) => setEventDate(e.target.value)}
        min={new Date().toISOString().split("T")[0]}
      />

      <input
        type="text"
        placeholder="Venue"
      />
    </div>
  );
}

export default EventInformation;