import { useState } from "react";

function GenerateReportModal({ isOpen }) {
  const [reportName, setReportName] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  const handleGenerate = () => {
    if (!reportName || !dateFrom || !dateTo) {
      setMessage("Please fill in all fields.");
      return;
    }

    setMessage("Report generated successfully.");
  };

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
        marginTop: "20px",
      }}
    >
      <h2>Generate Report</h2>

      <label htmlFor="reportName">Report Name</label>
      <br />
      <input
        id="reportName"
        type="text"
        placeholder="Report Name"
        value={reportName}
        onChange={(e) => setReportName(e.target.value)}
      />

      <br />
      <br />

      <label htmlFor="dateFrom">Date From</label>
      <br />
      <input
        id="dateFrom"
        type="date"
        value={dateFrom}
        onChange={(e) => setDateFrom(e.target.value)}
      />

      <br />
      <br />

      <label htmlFor="dateTo">Date To</label>
      <br />
      <input
        id="dateTo"
        type="date"
        value={dateTo}
        onChange={(e) => setDateTo(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleGenerate}>
        Generate
      </button>

      {message && (
        <>
          <br />
          <br />
          <p>{message}</p>
        </>
      )}
    </div>
  );
}

export default GenerateReportModal;