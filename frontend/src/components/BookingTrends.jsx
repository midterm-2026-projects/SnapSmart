function BookingTrends({ data }) {
  return (
    <div>
      <h2>Booking Trends</h2>

      {data.length > 0 ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              {item.month} - {item.bookings}
            </li>
          ))}
        </ul>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default BookingTrends;