import Navigation from "./components/Navigation";
import SummaryCards from "./components/SummaryCards";
import FinancialSummary from "./components/FinancialSummary";
import BookingTrends from "./components/BookingTrends";
import RecentBookings from "./components/RecentBookings";

function App() {
  return (
    <>
      <Navigation />
      <SummaryCards />
      <FinancialSummary />
      <BookingTrends />
      <RecentBookings />
    </>
  );
}

export default App;