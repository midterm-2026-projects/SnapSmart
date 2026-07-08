import React from "react";

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


export default UserMessage;