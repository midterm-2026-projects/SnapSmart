import React from "react";

const BotMessage = ({ message }) => {
  return (
    <div
      className="bot-message"
      data-testid="bot-message"
    >
      {message}
    </div>
  );
};

export default BotMessage;