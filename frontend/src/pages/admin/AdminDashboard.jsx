import React, { useState } from "react";
import "../../styles/admin/AdminDashboard.css";

const AdminDashboard = () => {

  const [stats] = useState({
    totalBookings: 86,
    totalCustomers: 64,
    totalRevenue: 285500,
    pendingPayments: 7,
    activePackages: 6,
    totalNotifications: 12,
    totalPhotos: 248,
  });


  const [recentBookings] = useState([
    {
      id: 1,
      customer: "Juan Dela Cruz",
      package: "Wedding Premium",
      date: "2026-07-20",
      status: "Confirmed",
      amount: 25000,
    },
    {
      id: 2,
      customer: "Maria Santos",
      package: "Birthday Shoot",
      date: "2026-07-18",
      status: "Pending",
      amount: 8000,
    },
    {
      id: 3,
      customer: "Angela Reyes",
      package: "Debut Package",
      date: "2026-07-15",
      status: "Completed",
      amount: 15000,
    },
  ]);


  const chartData = {
    labels: [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun",
    ],

    revenue: [
      12000,
      18000,
      15000,
      25000,
      22000,
      30000,
      27000,
    ],

    bookings: [
      5,
      8,
      12,
      9,
      15,
      18,
      14,
    ],
  };



  return (

    <div className="dashboard-container">


      {/* METRICS */}

      <section className="metrics-grid">


        <div className="metric-card">
          <div className="metric-icon">📅</div>
          <div className="metric-content">
            <h3>Total Bookings</h3>
            <p className="metric-value">
              {stats.totalBookings}
            </p>
            <span className="metric-change">
              +12% from last month
            </span>
          </div>
        </div>



        <div className="metric-card">
          <div className="metric-icon">👥</div>
          <div className="metric-content">
            <h3>Total Customers</h3>
            <p className="metric-value">
              {stats.totalCustomers}
            </p>
            <span className="metric-change">
              +8% from last month
            </span>
          </div>
        </div>



        <div className="metric-card">
          <div className="metric-icon">💰</div>
          <div className="metric-content">
            <h3>Total Revenue</h3>
            <p className="metric-value">
              ₱{stats.totalRevenue.toLocaleString()}
            </p>
            <span className="metric-change">
              +25% from last month
            </span>
          </div>
        </div>



        <div className="metric-card">
          <div className="metric-icon">🖼️</div>
          <div className="metric-content">
            <h3>Photos Uploaded</h3>
            <p className="metric-value">
              {stats.totalPhotos}
            </p>
            <span className="metric-change">
              Gallery updated
            </span>
          </div>
        </div>



        <div className="metric-card">
          <div className="metric-icon">⏳</div>
          <div className="metric-content">
            <h3>Pending Payments</h3>
            <p className="metric-value">
              {stats.pendingPayments}
            </p>
            <span className="metric-change">
              Need attention
            </span>
          </div>
        </div>



        <div className="metric-card">
          <div className="metric-icon">📦</div>
          <div className="metric-content">
            <h3>Active Packages</h3>
            <p className="metric-value">
              {stats.activePackages}
            </p>
            <span className="metric-change">
              Available packages
            </span>
          </div>
        </div>



        <div className="metric-card">
          <div className="metric-icon">🔔</div>
          <div className="metric-content">
            <h3>Notifications</h3>
            <p className="metric-value">
              {stats.totalNotifications}
            </p>
            <span className="metric-change">
              Unread messages
            </span>
          </div>
        </div>


      </section>




      {/* CHARTS */}


      <section className="charts-section">


        <div className="chart-card">

          <h3>
            Revenue Trend (Weekly)
          </h3>


          <div className="chart-placeholder">

            <div className="simple-chart">

              <p>
                Revenue visualization
              </p>


              <div className="bar-graph">


                {chartData.revenue.map((value, index) => (

                  <div
                    key={index}
                    className="bar"
                    style={{
                      height: `${(value / 30000) * 100}%`,
                    }}
                    title={`₱${value}`}
                  />

                ))}


              </div>


              <div className="labels">

                {chartData.labels.map((label) => (

                  <span key={label}>
                    {label}
                  </span>

                ))}

              </div>


            </div>

          </div>


        </div>





        <div className="chart-card">

          <h3>
            Bookings Overview
          </h3>


          <div className="chart-placeholder">

            <div className="simple-chart">

              <p>
                Bookings per day
              </p>


              <div className="bar-graph">


                {chartData.bookings.map((value, index) => (

                  <div
                    key={index}
                    className="bar"
                    style={{
                      height: `${(value / 20) * 100}%`,
                    }}
                    title={`${value} bookings`}
                  />

                ))}


              </div>



              <div className="labels">

                {chartData.labels.map((label) => (

                  <span key={label}>
                    {label}
                  </span>

                ))}

              </div>


            </div>


          </div>


        </div>


      </section>





      {/* RECENT BOOKINGS */}


      <section className="recent-section">


        <div className="section-header">

          <h3>
            Recent Bookings
          </h3>


          <a
            href="/admin/bookings"
            className="view-all"
          >
            View All →
          </a>


        </div>





        <table className="recent-table">


          <thead>

            <tr>
              <th>Customer</th>
              <th>Package</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>

          </thead>



          <tbody>


            {recentBookings.map((booking) => (

              <tr key={booking.id}>

                <td>
                  {booking.customer}
                </td>


                <td>
                  {booking.package}
                </td>


                <td>
                  {booking.date}
                </td>


                <td>
                  ₱{booking.amount.toLocaleString()}
                </td>


                <td>

                  <span
                    className={`status-badge status-${booking.status.toLowerCase()}`}
                  >

                    {booking.status}

                  </span>

                </td>


                <td>

                  <button className="action-btn">
                    View
                  </button>

                </td>


              </tr>

            ))}


          </tbody>


        </table>


      </section>



    </div>

  );

};


export default AdminDashboard;