function GeneratedReportsTable({ reports }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <table border="1" cellPadding="10" width="100%">
        <thead>
          <tr>
            <th>Report Name</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {reports.length === 0 ? (
            <tr>
              <td colSpan="3">No reports available</td>
            </tr>
          ) : (
            reports.map((report, index) => (
              <tr key={index}>
                <td>{report.name}</td>
                <td>{report.date}</td>
                <td>{report.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default GeneratedReportsTable;