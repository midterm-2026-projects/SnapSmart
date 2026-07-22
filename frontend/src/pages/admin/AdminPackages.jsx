import React, { useState } from 'react';
import '../../styles/admin/AdminManage.css';

const AdminPackages = () => {
  const [packages, setPackages] = useState([
    {
      id: 1,
      name: 'Basic Photography',
      description: 'Basic photography package for small events',
      price: 3000,
      duration: '4 hours',
      photos: 100,
      edits: 'Yes',
      prints: 'No',
      status: 'Active',
      bookings: 25,
    },
    {
      id: 2,
      name: 'Premium Photography',
      description: 'Premium photography with full editing',
      price: 5000,
      duration: '8 hours',
      photos: 300,
      edits: 'Yes',
      prints: 'Yes',
      status: 'Active',
      bookings: 42,
    },
    {
      id: 3,
      name: 'Videography Bundle',
      description: 'Video coverage with editing and music',
      price: 8000,
      duration: '10 hours',
      photos: 'N/A',
      edits: 'Yes',
      prints: 'No',
      status: 'Active',
      bookings: 18,
    },
    {
      id: 4,
      name: 'Complete Package',
      description: 'Photography + Videography combo',
      price: 12000,
      duration: '12 hours',
      photos: 300,
      edits: 'Yes',
      prints: 'Yes',
      status: 'Inactive',
      bookings: 5,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);

  const filteredPackages = packages.filter((pkg) =>
    pkg.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleStatus = (id) => {
    setPackages(
      packages.map((pkg) =>
        pkg.id === id
          ? { ...pkg, status: pkg.status === 'Active' ? 'Inactive' : 'Active' }
          : pkg
      )
    );
  };

  return (
    <div className="manage-container">
      <div className="manage-header">
        <h2>Manage Packages</h2>
        <button className="btn-primary" onClick={() => setShowForm(!showForm)}>
          ➕ New Package
        </button>
      </div>

      {/* Add/Edit Form */}
      {showForm && (
        <div className="form-section">
          <h3>Add New Package</h3>
          <form className="package-form">
            <div className="form-row">
              <input type="text" placeholder="Package Name" />
              <input type="number" placeholder="Price (₱)" />
            </div>
            <textarea placeholder="Description" rows="3"></textarea>
            <div className="form-row">
              <input type="text" placeholder="Duration" />
              <input type="number" placeholder="Number of Photos" />
            </div>
            <div className="form-row">
              <label>
                <input type="checkbox" /> Full Editing
              </label>
              <label>
                <input type="checkbox" /> Include Prints
              </label>
            </div>
            <div className="form-buttons">
              <button type="submit" className="btn-primary">Save Package</button>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Search */}
      <div className="filters-section">
        <input
          type="text"
          placeholder="Search packages..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Packages Grid */}
      <div className="packages-grid">
        {filteredPackages.map((pkg) => (
          <div key={pkg.id} className="package-card">
            <div className="package-header">
              <h3>{pkg.name}</h3>
              <span className={`badge status-${pkg.status.toLowerCase()}`}>
                {pkg.status}
              </span>
            </div>
            <p className="package-description">{pkg.description}</p>

            <div className="package-details">
              <div className="detail">
                <span className="label">Price:</span>
                <span className="value">₱{pkg.price.toLocaleString()}</span>
              </div>
              <div className="detail">
                <span className="label">Duration:</span>
                <span className="value">{pkg.duration}</span>
              </div>
              <div className="detail">
                <span className="label">Photos:</span>
                <span className="value">{pkg.photos}</span>
              </div>
              <div className="detail">
                <span className="label">Editing:</span>
                <span className="value">{pkg.edits}</span>
              </div>
              <div className="detail">
                <span className="label">Prints:</span>
                <span className="value">{pkg.prints}</span>
              </div>
              <div className="detail">
                <span className="label">Total Bookings:</span>
                <span className="value">{pkg.bookings}</span>
              </div>
            </div>

            <div className="package-actions">
              <button className="btn-small btn-edit">Edit</button>
              <button
                className="btn-small btn-toggle"
                onClick={() => toggleStatus(pkg.id)}
              >
                {pkg.status === 'Active' ? 'Deactivate' : 'Activate'}
              </button>
              <button className="btn-small btn-delete">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {filteredPackages.length === 0 && (
        <div className="no-data">No packages found</div>
      )}
    </div>
  );
};

export default AdminPackages;
