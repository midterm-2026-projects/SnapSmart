import React from "react";

const BotMessage = ({ message }) => {
  return (
    <div
      className="bot-message"
      data-testid="bot-message"
      role="article"
    >
      <p>{message}</p>
    </div>
  );
};


export default BotMessage;