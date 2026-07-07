import "./App.css";
import ChatbotInterface from "./components/ChatbotInterface.jsx";
import TotalClients from "./components/TotalClients";
import BookingTrends from "./components/BookingTrends";
import RecentBookings from "./components/RecentBookings";
import BookingForm from "./components/BookingForm";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <TotalClients totalClients={35} />

      <hr />

      <BookingTrends data={trends} />

      <hr />

      <RecentBookings bookings={bookings} />

      <hr />

      <ChatbotInterface />
    <div>
      <BookingForm />
    </div>
  );
}

export default App;