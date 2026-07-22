import React, { useState } from 'react';
import '../../styles/admin/AdminManage.css';

const AdminBookings = () => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      bookingNo: 'BK-001',
      customer: 'John Doe',
      email: 'john@email.com',
      package: 'Premium Photography',
      date: '2025-02-15',
      time: '2:00 PM',
      amount: 5000,
      status: 'Confirmed',
      paymentStatus: 'Paid',
    },
    {
      id: 2,
      bookingNo: 'BK-002',
      customer: 'Maria Santos',
      email: 'maria@email.com',
      package: 'Videography Bundle',
      date: '2025-02-20',
      time: '10:00 AM',
      amount: 8000,
      status: 'Pending',
      paymentStatus: 'Unpaid',
    },
    {
      id: 3,
      bookingNo: 'BK-003',
      customer: 'Robert Carlos',
      email: 'robert@email.com',
      package: 'Basic Photography',
      date: '2025-01-22',
      time: '3:00 PM',
      amount: 3000,
      status: 'Completed',
      paymentStatus: 'Paid',
    },
    {
      id: 4,
      bookingNo: 'BK-004',
      customer: 'Ana Cruz',
      email: 'ana@email.com',
      package: 'Premium Photography',
      date: '2025-03-01',
      time: '1:00 PM',
      amount: 5000,
      status: 'Cancelled',
      paymentStatus: 'Refunded',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [editingId, setEditingId] = useState(null);

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.bookingNo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || booking.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleStatusChange = (id, newStatus) => {
    setBookings(
      bookings.map((booking) =>
        booking.id === id ? { ...booking, status: newStatus } : booking
      )
    );
    setEditingId(null);
  };

  return (
    <div className="manage-container">
      <div className="manage-header">
        <h2>Manage Bookings</h2>
        <button className="btn-primary">➕ New Booking</button>
      </div>

      {/* Filters & Search */}
      <div className="filters-section">
        <input
          type="text"
          placeholder="Search by customer or booking number..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="filter-select"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option>All</option>
          <option>Pending</option>
          <option>Confirmed</option>
          <option>Completed</option>
          <option>Cancelled</option>
        </select>
      </div>

      {/* Table */}
      <table className="manage-table">
        <thead>
          <tr>
            <th>Booking No</th>
            <th>Customer</th>
            <th>Email</th>
            <th>Package</th>
            <th>Date & Time</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Payment</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredBookings.map((booking) => (
            <tr key={booking.id}>
              <td className="font-bold">{booking.bookingNo}</td>
              <td>{booking.customer}</td>
              <td>{booking.email}</td>
              <td>{booking.package}</td>
              <td>{booking.date} {booking.time}</td>
              <td>₱{booking.amount.toLocaleString()}</td>
              <td>
                {editingId === booking.id ? (
                  <select
                    value={booking.status}
                    onChange={(e) => handleStatusChange(booking.id, e.target.value)}
                    onBlur={() => setEditingId(null)}
                    className="status-select"
                    autoFocus
                  >
                    <option>Pending</option>
                    <option>Confirmed</option>
                    <option>Completed</option>
                    <option>Cancelled</option>
                  </select>
                ) : (
                  <span
                    className={`badge status-${booking.status.toLowerCase()}`}
                    onClick={() => setEditingId(booking.id)}
                  >
                    {booking.status}
                  </span>
                )}
              </td>
              <td>
                <span className={`badge payment-${booking.paymentStatus.toLowerCase()}`}>
                  {booking.paymentStatus}
                </span>
              </td>
              <td>
                <div className="action-buttons">
                  <button className="btn-small btn-view">👁️</button>
                  <button className="btn-small btn-edit">✏️</button>
                  <button className="btn-small btn-delete">🗑️</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredBookings.length === 0 && (
        <div className="no-data">No bookings found</div>
      )}
    </div>
  );
};

export default AdminBookings;
