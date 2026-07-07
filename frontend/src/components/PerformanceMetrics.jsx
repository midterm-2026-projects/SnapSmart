function PerformanceMetrics({ metrics }) {
  if (!metrics || metrics.length === 0) {
    return (
      <div>
        <h2>Performance Metrics</h2>
        <p>No performance data available</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Performance Metrics</h2>

      {metrics.map((metric, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "15px",
            marginBottom: "15px",
            width: "300px",
          }}
        >
          <h3>{metric.title}</h3>

          <p>
            <strong>{metric.value}%</strong>
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
              data-testid={`progress-bar-${index}`}
              style={{
                width: `${metric.value}%`,
                height: "100%",
                backgroundColor: "#4CAF50",
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PerformanceMetrics;