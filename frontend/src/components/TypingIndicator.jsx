import React from "react";


const TypingIndicator = ({ isTyping }) => {
  if (!isTyping) return null;

  return (
    <div
      className="typing-indicator"
      data-testid="typing-indicator"
      role="status"
      aria-live="polite"
    >
      Bot is typing...
    </div>
  );
};


TypingIndicator.defaultProps = {
  isTyping: false,
};

export default TypingIndicator;