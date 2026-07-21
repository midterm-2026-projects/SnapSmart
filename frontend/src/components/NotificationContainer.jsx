import { useEffect, useState } from "react";
import NotificationList from "./NotificationList";


export default function NotificationContainer() {

  const [notifications, setNotifications] = useState([]);


  // TEMP USER ID FOR TESTING
  const USER_ID = "8e375b9c-dba7-41d3-af37-0291f8a4cd2b";



  useEffect(() => {

    fetchNotifications();

  }, []);




  const fetchNotifications = async () => {

    try {


     const response = await fetch(
  `http://localhost:3000/api/notifications/customer/${USER_ID}`
);



      console.log(
        "Notification Status:",
        response.status
      );



      const data = await response.json();



      console.log(
        "Notification Data:",
        data
      );



      setNotifications(
        data.data || data
      );



    } catch(error) {


      console.error(
        "Failed to fetch notifications:",
        error
      );


    }

  };





  return (

    <div className="notification-container">


      <div className="notification-header">

        <h2>
          Notifications
        </h2>

      </div>




      {
        notifications.length === 0 ? (

          <p className="empty-notification">

            No notifications available.

          </p>


        ) : (


          <NotificationList

            notifications={notifications}

          />


        )
      }



    </div>

  );

}