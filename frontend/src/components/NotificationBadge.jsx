export default function NotificationBadge({ count }) {
  return (
    <span data-testid="notification-badge">
      {count}
    </span>
  );
}