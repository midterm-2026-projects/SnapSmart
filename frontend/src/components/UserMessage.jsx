import React from "react";
import PropTypes from "prop-types";

const UserMessage = ({ message }) => {
  return (
    <div
      className="user-message"
      data-testid="user-message"
      role="article"
    >
      <p>{message}</p>
    </div>
  );
};

UserMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default UserMessage;