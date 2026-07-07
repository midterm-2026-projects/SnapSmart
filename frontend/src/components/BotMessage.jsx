import React from "react";
import PropTypes from "prop-types";

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

BotMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default BotMessage;