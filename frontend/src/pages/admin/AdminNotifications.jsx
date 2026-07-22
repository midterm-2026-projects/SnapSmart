import React, { useState } from 'react';
import '../../styles/admin/AdminNotifications.css';

const AdminNotifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'booking',
      title: 'New Booking Request',
      message: 'John Doe has requested a booking for Premium Photography on Feb 15',
      customer: 'John Doe',
      timestamp: '2025-01-24 2:30 PM',
      read: false,
      priority: 'High',
    },
    {
      id: 2,
      type: 'payment',
      title: 'Payment Received',
      message: 'Payment of ₱5000 received from John Doe for booking BK-001',
      customer: 'John Doe',
      timestamp: '2025-01-24 2:15 PM',
      read: false,
      priority: 'Normal',
    },
    {
      id: 3,
      type: 'pending',
      title: 'Pending Payment',
      message: 'Maria Santos has not completed payment for booking BK-002. Amount: ₱8000',
      customer: 'Maria Santos',
      timestamp: '2025-01-23 10:45 AM',
      read: false,
      priority: 'High',
    },
    {
      id: 4,
      type: 'message',
      title: 'New Message',
      message: 'Robert Carlos sent you a message about his booking',
      customer: 'Robert Carlos',
      timestamp: '2025-01-22 3:20 PM',
      read: true,
      priority: 'Normal',
    },
    {
      id: 5,
      type: 'review',
      title: 'New Review',
      message: 'Ana Cruz left a 5-star review for your services',
      customer: 'Ana Cruz',
      timestamp: '2025-01-21 11:30 AM',
      read: true,
      priority: 'Low',
    },
  ]);

  const [filter, setFilter] = useState('All');

  const filteredNotifications = notifications.filter((notif) => {
    if (filter === 'Unread') return !notif.read;
    if (filter === 'High Priority') return notif.priority === 'High';
    return true;
  });

  const handleMarkAsRead = (id) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map((notif) => ({ ...notif, read: true })));
  };

  const handleDeleteNotification = (id) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'booking':
        return '📅';
      case 'payment':
        return '💰';
      case 'pending':
        return '⏳';
      case 'message':
        return '💬';
      case 'review':
        return '⭐';
      default:
        return '🔔';
    }
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="notifications-container">
      <div className="notif-header">
        <h2>Notifications {unreadCount > 0 && <span className="badge-count">{unreadCount}</span>}</h2>
        {unreadCount > 0 && (
          <button className="btn-secondary" onClick={handleMarkAllAsRead}>
            Mark All as Read
          </button>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="notif-filters">
        {['All', 'Unread', 'High Priority'].map((tab) => (
          <button
            key={tab}
            className={`filter-tab ${filter === tab ? 'active' : ''}`}
            onClick={() => setFilter(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Notifications List */}
      <div className="notifications-list">
        {filteredNotifications.map((notif) => (
          <div
            key={notif.id}
            className={`notification-item ${notif.read ? 'read' : 'unread'} priority-${notif.priority.toLowerCase()}`}
          >
            <div className="notif-left">
              <input
                type="checkbox"
                checked={notif.read}
                onChange={() => handleMarkAsRead(notif.id)}
                className="notif-checkbox"
              />
              <span className="notif-icon">{getNotificationIcon(notif.type)}</span>
            </div>

            <div className="notif-content">
              <div className="notif-title-row">
                <h4>{notif.title}</h4>
                <span className="priority-label">{notif.priority}</span>
              </div>
              <p>{notif.message}</p>
              <div className="notif-meta">
                <span className="customer">👤 {notif.customer}</span>
                <span className="time">🕐 {notif.timestamp}</span>
              </div>
            </div>

            <div className="notif-actions">
              {!notif.read && (
                <button
                  className="btn-small btn-read"
                  onClick={() => handleMarkAsRead(notif.id)}
                  title="Mark as read"
                >
                  ✓
                </button>
              )}
              <button
                className="btn-small btn-delete"
                onClick={() => handleDeleteNotification(notif.id)}
                title="Delete"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredNotifications.length === 0 && (
        <div className="no-data">
          {filter === 'Unread'
            ? 'All notifications are read!'
            : 'No notifications found'}
        </div>
      )}

      {/* Notification Settings */}
      <div className="notif-settings">
        <h3>Notification Preferences</h3>
        <div className="settings-list">
          <label>
            <input type="checkbox" defaultChecked /> Email notifications for new bookings
          </label>
          <label>
            <input type="checkbox" defaultChecked /> Email notifications for payments
          </label>
          <label>
            <input type="checkbox" defaultChecked /> SMS alerts for pending payments
          </label>
          <label>
            <input type="checkbox" /> Daily summary email
          </label>
        </div>
      </div>
    </div>
  );
};

export default AdminNotifications;
