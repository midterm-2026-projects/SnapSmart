import React, { useState } from 'react';
import '../../styles/admin/AdminManage.css';

const AdminPayments = () => {
  const [payments, setPayments] = useState([
    {
      id: 1,
      transactionId: 'TXN-001',
      customer: 'John Doe',
      amount: 5000,
      bookingNo: 'BK-001',
      method: 'Credit Card',
      date: '2025-01-20',
      time: '2:30 PM',
      status: 'Completed',
    },
    {
      id: 2,
      transactionId: 'TXN-002',
      customer: 'Maria Santos',
      amount: 8000,
      bookingNo: 'BK-002',
      method: 'GCash',
      date: '2025-01-21',
      time: '10:15 AM',
      status: 'Pending',
    },
    {
      id: 3,
      transactionId: 'TXN-003',
      customer: 'Robert Carlos',
      amount: 3000,
      bookingNo: 'BK-003',
      method: 'Bank Transfer',
      date: '2025-01-22',
      time: '3:45 PM',
      status: 'Completed',
    },
    {
      id: 4,
      transactionId: 'TXN-004',
      customer: 'Ana Cruz',
      amount: 5000,
      bookingNo: 'BK-005',
      method: 'Credit Card',
      date: '2025-01-23',
      time: '11:00 AM',
      status: 'Failed',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const filteredPayments = payments.filter((payment) => {
    const matchesSearch =
      payment.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.transactionId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || payment.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const totalRevenue = payments
    .filter((p) => p.status === 'Completed')
    .reduce((sum, p) => sum + p.amount, 0);

  const pendingAmount = payments
    .filter((p) => p.status === 'Pending')
    .reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="manage-container">
      <div className="manage-header">
        <h2>Manage Payments</h2>
        <button className="btn-primary">➕ Record Payment</button>
      </div>

      {/* Quick Stats */}
      <div className="quick-stats">
        <div className="stat-box">
          <div className="stat-icon">✓</div>
          <div className="stat-info">
            <h4>Completed</h4>
            <p className="stat-value">₱{totalRevenue.toLocaleString()}</p>
          </div>
        </div>
        <div className="stat-box">
          <div className="stat-icon">⏳</div>
          <div className="stat-info">
            <h4>Pending</h4>
            <p className="stat-value">₱{pendingAmount.toLocaleString()}</p>
          </div>
        </div>
        <div className="stat-box">
          <div className="stat-icon">📊</div>
          <div className="stat-info">
            <h4>Total Transactions</h4>
            <p className="stat-value">{payments.length}</p>
          </div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="filters-section">
        <input
          type="text"
          placeholder="Search by customer or transaction ID..."
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
          <option>Completed</option>
          <option>Pending</option>
          <option>Failed</option>
        </select>
      </div>

      {/* Table */}
      <table className="manage-table">
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Customer</th>
            <th>Booking No</th>
            <th>Amount</th>
            <th>Method</th>
            <th>Date & Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPayments.map((payment) => (
            <tr key={payment.id}>
              <td className="font-bold">{payment.transactionId}</td>
              <td>{payment.customer}</td>
              <td>{payment.bookingNo}</td>
              <td>₱{payment.amount.toLocaleString()}</td>
              <td>{payment.method}</td>
              <td>{payment.date} {payment.time}</td>
              <td>
                <span className={`badge status-${payment.status.toLowerCase()}`}>
                  {payment.status}
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

      {filteredPayments.length === 0 && (
        <div className="no-data">No payments found</div>
      )}
    </div>
  );
};

export default AdminPayments;
