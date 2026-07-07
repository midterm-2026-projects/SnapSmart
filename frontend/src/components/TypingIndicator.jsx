import React from "react";
import PropTypes from "prop-types";

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

TypingIndicator.propTypes = {
  isTyping: PropTypes.bool,
};

TypingIndicator.defaultProps = {
  isTyping: false,
};

export default TypingIndicator;