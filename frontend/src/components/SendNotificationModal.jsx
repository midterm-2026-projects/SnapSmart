import React from "react";

const SendNotificationModal = ({ isOpen, onClose }) => {

  if (!isOpen) return null;

  return (
    <div
      className="send-notification-modal"
      data-testid="send-notification-modal"
    >

      <h2>Send Notification</h2>

      <form>

        <input
          type="text"
          placeholder="Notification title"
          data-testid="notification-title"
        />

        <textarea
          placeholder="Notification message"
          data-testid="notification-message"
        />

        <button type="submit">
          Send
        </button>

        <button
          type="button"
          onClick={onClose}
        >
          Cancel
        </button>

      </form>

    </div>
  );
};

export default SendNotificationModal;