function GenerateReportModal({ isOpen }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
        marginTop: "20px",
      }}
    >
      <h2>Generate Report</h2>

      <input
        type="text"
        placeholder="Report Name"
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Date From"
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Date To"
      />

      <br />
      <br />

      <button>Generate</button>
    </div>
  );
}

export default GenerateReportModal;