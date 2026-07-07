function ReportActionButtons({
  onGenerate,
  onDownload,
  onExport,
  loading = false,
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginTop: "20px",
      }}
    >
      <button
        onClick={onGenerate}
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate"}
      </button>

      <button
        onClick={onDownload}
        disabled={loading}
      >
        Download
      </button>

      <button
        onClick={onExport}
        disabled={loading}
      >
        Export
      </button>
    </div>
  );
}

export default ReportActionButtons;