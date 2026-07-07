import "./App.css";

import BookingForm from "./components/BookingForm";

import PerformanceMetrics from "./components/PerformanceMetrics";
import RevenueAnalyticsChart from "./components/RevenueAnalyticsChart";
import ReportActionButtons from "./components/ReportActionButtons";

function App() {
  const metrics = [
    {
      title: "Booking Completion",
      value: 85,
    },
    {
      title: "Customer Satisfaction",
      value: 92,
    },
    {
      title: "Revenue Growth",
      value: 76,
    },
  ];

  const revenueData = [
    {
      month: "January",
      revenue: 25,
    },
    {
      month: "February",
      revenue: 45,
    },
    {
      month: "March",
      revenue: 70,
    },
  ];

  function handleGenerate() {
    alert("Generate Report clicked");
  }

  function handleDownload() {
    alert("Download Report clicked");
  }

  function handleExport() {
    alert("Export Report clicked");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Booking Form</h1>

      <BookingForm />

      <hr />
      <hr />

      <h1>Week 2 Day 2 Analytics UI</h1>

      <PerformanceMetrics metrics={metrics} />

      <hr />

      <RevenueAnalyticsChart data={revenueData} />

      <hr />

      <ReportActionButtons
        onGenerate={handleGenerate}
        onDownload={handleDownload}
        onExport={handleExport}
      />
    </div>
  );
}

export default App;