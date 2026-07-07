import { useState } from "react";

function BookingActionButton({
  label,
  onAction,
}) {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    if (onAction) {
      onAction();
    }

    setMessage("Booking Confirmed Successfully!");
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
      >
        {label}
      </button>

      {message && (
        <p className="success">
          {message}
        </p>
      )}
    </div>
  );
}

export default BookingActionButton;