import React, { useState } from "react";

const SendNotificationModal = ({ isOpen, onClose, onSend }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !message.trim()) {
      setError("Title and message are required");
      return;
    }

    onSend({
      title,
      message,
    });

    setTitle("");
    setMessage("");
    setError("");
  };


  return (
    <div
      className="send-notification-modal"
      data-testid="send-notification-modal"
    >

      <h2>Send Notification</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Notification title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />


        <textarea
          placeholder="Notification message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />


        {error && (
          <p data-testid="error-message">
            {error}
          </p>
        )}


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