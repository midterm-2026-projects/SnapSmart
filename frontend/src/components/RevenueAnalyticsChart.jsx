function RevenueAnalyticsChart({ data }) {
  if (!data || data.length === 0) {
    return (
      <div>
        <h2>Revenue Analytics</h2>
        <p>No analytics data available</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Revenue Analytics</h2>

      {data.map((item, index) => (
        <div
          key={index}
          style={{
            marginBottom: "15px",
            width: "320px",
          }}
        >
          <p>
            <strong>{item.month}</strong>
          </p>

          <div
            style={{
              width: "100%",
              height: "20px",
              backgroundColor: "#ddd",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <div
              data-testid={`chart-bar-${index}`}
              style={{
                width: `${item.revenue}%`,
                height: "100%",
                backgroundColor: "#2196F3",
              }}
            ></div>
          </div>

          <p>₱{item.revenue.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

export default RevenueAnalyticsChart;