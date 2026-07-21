import React from "react";


const NotificationCard = ({ notification }) => {

  return (

    <div
      className="notification-card"
      data-testid="notification-card"
    >

      <h3>
        {notification.title}
      </h3>


      <p>
        {notification.message}
      </p>


      <small>
        {
          notification.created_at
          ? new Date(notification.created_at).toLocaleString()
          : ""
        }
      </small>


    </div>

  );

};


export default NotificationCard;