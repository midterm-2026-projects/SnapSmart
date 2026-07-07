import React from "react";

const TypingIndicator = ({ isTyping }) => {
  if (!isTyping) return null;

  return (
    <div
      className="typing-indicator"
      data-testid="typing-indicator"
    >
      Bot is typing...
    </div>
  );
};

export default TypingIndicator;