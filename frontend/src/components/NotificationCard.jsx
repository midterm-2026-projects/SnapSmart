import React from "react";


const NotificationCard = ({ notification }) => {


  const displayDate = () => {


    if (notification.date) {

      return notification.date;

    }


    if (notification.created_at) {


      return notification.created_at.split("T")[0];


    }


    return "";


  };



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

        {displayDate()}

      </small>



    </div>

  );


};


export default NotificationCard;