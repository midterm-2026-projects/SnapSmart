import { useState } from "react";
import MessageDisplay from "./MessageDisplay";
import UserInput from "./UserInput";

export default function ChatbotInterface() {
  const [messages, setMessages] = useState([]);

  const handleSend = (text) => {
    const trimmedText = text.trim();

    // Prevent empty messages
    if (!trimmedText) {
      return;
    }

    const userMessage = {
      id: Date.now(),
      sender: "User",
      text: trimmedText,
    };

    const botMessage = {
      id: Date.now() + 1,
      sender: "Bot",
      text: "Message received!",
    };

    setMessages((previousMessages) => [
      ...previousMessages,
      userMessage,
      botMessage,
    ]);
  };

  return (
    <div 
      data-testid="chatbot-interface"
      className="chatbot-container"
    >
      <h1>Chatbot</h1>

      <MessageDisplay 
        messages={messages} 
      />

      <UserInput 
        onSend={handleSend} 
      />
    </div>
  );
}