function TotalClients({ totalClients }) {
  return (
    <div data-testid="total-clients-card">
      <h2>Total Clients</h2>

      {totalClients > 0 ? (
        <h1>{totalClients}</h1>
      ) : (
        <p>No client data available</p>
      )}
    </div>
  );
}

export default TotalClients;