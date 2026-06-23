function RecentBookings({ bookings = [] }) {
  return (
    <section>
      <h2>Recent Bookings</h2>

      {bookings.length === 0 ? (
        <p>No bookings available</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>Client</th>
              <th>Service</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.client}</td>
                <td>{booking.service}</td>
                <td>{booking.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

export default RecentBookings;