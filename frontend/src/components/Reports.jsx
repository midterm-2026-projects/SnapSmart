function Reports({ reports = [] }) {
  if (reports.length === 0) {
    return (
      <div>
        <h2>Generated Reports</h2>
        <p>No reports available.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Generated Reports</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "16px",
        }}
      >
        {reports.map((report) => (
          <div
            key={report.title}
            data-testid="report-card"
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "16px",
            }}
          >
            <h3>{report.title}</h3>

            <p>{report.date}</p>

            <div style={{ marginTop: "15px" }}>
              <small>{report.label1}</small>
              <h4>{report.value1}</h4>
            </div>

            <div style={{ marginTop: "10px" }}>
              <small>{report.label2}</small>
              <h4>{report.value2}</h4>
            </div>

            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "20px",
              }}
            >
              <button>View</button>
              <button>Download</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reports;