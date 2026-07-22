import React, { useState } from 'react';
import '../../styles/admin/AdminManage.css';

const AdminCustomers = () => {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@email.com',
      phone: '09123456789',
      address: '123 Main St, Manila',
      totalBookings: 5,
      totalSpent: 25000,
      joinDate: '2024-06-15',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Maria Santos',
      email: 'maria@email.com',
      phone: '09234567890',
      address: '456 Oak Ave, Quezon City',
      totalBookings: 3,
      totalSpent: 15000,
      joinDate: '2024-08-20',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Robert Carlos',
      email: 'robert@email.com',
      phone: '09345678901',
      address: '789 Pine Rd, Makati',
      totalBookings: 1,
      totalSpent: 3000,
      joinDate: '2024-12-01',
      status: 'Inactive',
    },
    {
      id: 4,
      name: 'Ana Cruz',
      email: 'ana@email.com',
      phone: '09456789012',
      address: '321 Cedar Ln, Taguig',
      totalBookings: 8,
      totalSpent: 42000,
      joinDate: '2024-05-10',
      status: 'Active',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || customer.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="manage-container">
      <div className="manage-header">
        <h2>Manage Customers</h2>
        <button className="btn-primary">➕ Add Customer</button>
      </div>

      {/* Filters & Search */}
      <div className="filters-section">
        <input
          type="text"
          placeholder="Search by name or email..."
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
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      {/* Table */}
      <table className="manage-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Total Bookings</th>
            <th>Total Spent</th>
            <th>Join Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((customer) => (
            <tr key={customer.id}>
              <td className="font-bold">{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>{customer.address}</td>
              <td>{customer.totalBookings}</td>
              <td>₱{customer.totalSpent.toLocaleString()}</td>
              <td>{customer.joinDate}</td>
              <td>
                <span className={`badge status-${customer.status.toLowerCase()}`}>
                  {customer.status}
                </span>
              </td>
              <td>
                <div className="action-buttons">
                  <button className="btn-small btn-view" title="View">👁️</button>
                  <button className="btn-small btn-edit" title="Edit">✏️</button>
                  <button className="btn-small btn-delete" title="Delete">🗑️</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredCustomers.length === 0 && (
        <div className="no-data">No customers found</div>
      )}

      {/* Stats Summary */}
      <div className="stats-summary">
        <div className="stat">
          <h4>Total Customers</h4>
          <p>{customers.length}</p>
        </div>
        <div className="stat">
          <h4>Active</h4>
          <p>{customers.filter(c => c.status === 'Active').length}</p>
        </div>
        <div className="stat">
          <h4>Total Revenue</h4>
          <p>₱{customers.reduce((sum, c) => sum + c.totalSpent, 0).toLocaleString()}</p>
        </div>
        <div className="stat">
          <h4>Average Per Customer</h4>
          <p>₱{Math.round(customers.reduce((sum, c) => sum + c.totalSpent, 0) / customers.length).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminCustomers;
