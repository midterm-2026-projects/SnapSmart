import React from "react";
import NotificationCard from "./NotificationCard";

const NotificationList = ({ notifications }) => {
  return (
    <div
      className="notification-list"
      data-testid="notification-list"
    >
      {notifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          notification={notification}
        />
      ))}
    </div>
  );
};

export default NotificationList;