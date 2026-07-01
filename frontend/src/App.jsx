import "./App.css";
import ChatHeader from "./components/ChatHeader";
import ChatWindow from "./components/ChatWindow";
import QuickReply from "./components/QuickReply";

function App() {
  const messages = [
    "Hello!",
    "How can I help you today?",
  ];

  const replies = [
    "Book a Session",
    "View Packages",
    "Contact Support",
  ];

  return (
    <div>
      <ChatHeader />
      <ChatWindow messages={messages} />
      <QuickReply options={replies} />
    </div>
  );
}

export default App;