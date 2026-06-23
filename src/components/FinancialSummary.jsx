function FinancialSummary({
  thisMonth = 0,
  lastMonth = 0,
  expenses = 0,
  profit = 0,
}) {
  const hasData =
    thisMonth > 0 ||
    lastMonth > 0 ||
    expenses > 0 ||
    profit > 0;

  return (
    <section>
      <h2>Financial Summary</h2>

      {hasData ? (
        <>
          <p>This Month: ₱{thisMonth}</p>
          <p>Last Month: ₱{lastMonth}</p>
          <p>Total Expenses: ₱{expenses}</p>
          <p>Net Profit: ₱{profit}</p>
        </>
      ) : (
        <p>No financial data available</p>
      )}
    </section>
  );
}

export default FinancialSummary;