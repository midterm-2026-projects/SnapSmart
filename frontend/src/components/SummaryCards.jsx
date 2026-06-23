function SummaryCards({
  bookings = 0,
  completed = 0,
  pending = 0,
  clients = 0,
  revenue = 0,
  events = 0,
}) {
  return (
    <section>
      <h2>Summary Cards</h2>

      <p>Total Bookings: {bookings}</p>
      <p>Completed: {completed}</p>
      <p>Pending: {pending}</p>
      <p>Total Clients: {clients}</p>
      <p>Total Revenue: ₱{revenue}</p>
      <p>Upcoming Events: {events}</p>
    </section>
  );
}

export default SummaryCards;