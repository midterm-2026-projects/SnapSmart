import React from "react";

const UserMessage = ({ message }) => {
  return (
    <div
      className="user-message"
      data-testid="user-message"
    >
      {message}
    </div>
  );
};

export default UserMessage;