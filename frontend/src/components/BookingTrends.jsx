function BookingTrends({ hasData = false }) {
  return (
    <section>
      <h2>Booking Trends</h2>

      {hasData ? (
        <p>Chart Placeholder</p>
      ) : (
        <p>No booking trend data available</p>
      )}
    </section>
  );
}

export default BookingTrends;