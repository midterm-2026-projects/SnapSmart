export default function NotificationList({ notifications }) {
  return (
    <ul data-testid="notification-list">
      {notifications.map((notification, index) => (
        <li key={index}>{notification}</li>
      ))}
    </ul>
  );
}