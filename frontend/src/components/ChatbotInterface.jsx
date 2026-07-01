import { useState } from "react";
import MessageDisplay from "./MessageDisplay";
import UserInput from "./UserInput";

export default function ChatbotInterface() {
  const [messages, setMessages] = useState([]);

  const handleSend = (text) => {
    if (!text.trim()) return;

    setMessages([
      ...messages,
      { sender: "User", text },
      { sender: "Bot", text: "Message received!" },
    ]);
  };

  return (
    <div data-testid="chatbot-interface">
      <MessageDisplay messages={messages} />
      <UserInput onSend={handleSend} />
    </div>
  );
}