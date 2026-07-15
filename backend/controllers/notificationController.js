export const getNotifications = (req, res) => {
  res.status(200).json([
    {
      id: 1,
      message: "Booking confirmed",
      read: false
    }
  ]);
};


export const createNotification = (req, res) => {
  res.status(201).json({
    message: "Notification created"
  });
};


export const markAsRead = (req, res) => {
  res.status(200).json({
    message: "Notification marked as read"
  });
};