function RecentBookings({ bookings }) {
  return (
    <div>
      <h2>Recent Bookings</h2>

      <table>
        <thead>
          <tr>
            <th>Client</th>
            <th>Date</th>
            <th>Status</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {bookings.length > 0 ? (
            bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.client}</td>
                <td>{booking.date}</td>
                <td>{booking.status}</td>
                <td>{booking.amount}</td>
                <td>
                  <button>View</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No bookings found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default RecentBookings;