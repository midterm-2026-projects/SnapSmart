function PerformanceMetrics({ metrics = [] }) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow">
      <h2 className="text-xl font-semibold mb-4">
        Performance Metrics
      </h2>

      {metrics.length === 0 ? (
        <p>No performance metrics available.</p>
      ) : (
        metrics.map((metric) => (
          <div
            key={metric.title}
            data-testid="performance-metric"
            className="mb-4"
          >
            <div className="flex justify-between mb-1">
              <span>{metric.title}</span>
              <span>{metric.value}%</span>
            </div>

            <progress
              value={metric.value}
              max={100}
              className="w-full"
            />
          </div>
        ))
      )}
    </div>
  );
}

export default PerformanceMetrics;