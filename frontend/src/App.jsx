import "./App.css";
import ChatbotInterface from "./components/ChatbotInterface.jsx";
import TotalClients from "./components/TotalClients";
import BookingTrends from "./components/BookingTrends";
import RecentBookings from "./components/RecentBookings";

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

  return (
    <div style={{ padding: "20px" }}>
      <TotalClients totalClients={35} />

      <hr />

      <BookingTrends data={trends} />

      <hr />

      <RecentBookings bookings={bookings} />

      <hr />

      <ChatbotInterface />
    </div>
  );
}

export default App;