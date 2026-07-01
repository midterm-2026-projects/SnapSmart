import NotificationList from "./NotificationList";
import NotificationBadge from "./NotificationBadge";

export default function NotificationInterface() {
  const notifications = [
    "Booking confirmed",
    "New message received",
    "Reminder: Event tomorrow",
  ];

  return (
    <div data-testid="notification-interface">
      <h2>Notifications</h2>

      <NotificationBadge count={notifications.length} />

      <NotificationList notifications={notifications} />
    </div>
  );
}