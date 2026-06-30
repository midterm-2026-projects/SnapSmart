function BookingStatistics({ title, value, subtitle }) {
  return (
    <div
      data-testid="booking-statistics-card"
      className="border rounded-lg bg-white p-4 shadow-sm"
    >
      <h3>{title}</h3>

      <h2>{value ?? "0"}</h2>

      <p>{subtitle}</p>
    </div>
  );
}

export default BookingStatistics;