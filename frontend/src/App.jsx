import "./App.css";

import TotalClients from "./components/TotalClients";
import BookingTrends from "./components/BookingTrends";
import RecentBookings from "./components/RecentBookings";

import FinancialSummaryCard from "./components/FinancialSummaryCard";
import GeneratedReportsTable from "./components/GeneratedReportsTable";
import GenerateReportModal from "./components/GenerateReportModal";

function App() {
  const trends = [
    { month: "January", bookings: 15 },
    { month: "February", bookings: 22 },
    { month: "March", bookings: 18 },
  ];

  const bookings = [
    {
      id: 1,
      client: "Juan Dela Cruz",
      date: "2026-05-01",
      status: "Completed",
      amount: "₱5,000",
    },
    {
      id: 2,
      client: "Maria Santos",
      date: "2026-05-03",
      status: "Pending",
      amount: "₱3,500",
    },
  ];

  const reports = [
    {
      name: "Sales Report",
      date: "July 1, 2026",
      status: "Completed",
    },
    {
      name: "Booking Report",
      date: "July 2, 2026",
      status: "Pending",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Week 1 Dashboard UI</h1>

      <TotalClients totalClients={35} />

      <hr />

      <BookingTrends data={trends} />

      <hr />

      <RecentBookings bookings={bookings} />

      <hr />
      <hr />

      <h1>Week 2 Report UI</h1>

      <FinancialSummaryCard
        title="Total Revenue"
        value="₱120,000"
      />

      <br />

      <GeneratedReportsTable reports={reports} />

      <br />

      <GenerateReportModal isOpen={true} />
    </div>
  );
}

export default App;