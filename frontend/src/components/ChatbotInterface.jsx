import { useState } from "react";

function MessageDisplay({ messages }) {
  return (
    <div data-testid="message-display">
      {messages.length === 0 ? (
        <p data-testid="empty-message">
          No messages yet.
        </p>
      ) : (
        messages.map((message) => (
          <div 
            key={message.id}
            data-testid="message-item"
          >
            <strong>{message.sender}:</strong>{" "}
            {message.text}
          </div>
        ))
      )}
    </div>
  );
}


function UserInput({ onSend }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    onSend(input.trim());
    setInput("");
  };

  return (
    <form 
      data-testid="user-input-form"
      onSubmit={handleSubmit}
    >
      <input
        data-testid="user-input"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        data-testid="send-button"
        type="submit"
      >
        Send
      </button>
    </form>
  );
}


export default function ChatbotInterface() {
  const [messages, setMessages] = useState([]);

  const handleSend = (text) => {
    if (!text.trim()) return;

    setMessages((previousMessages) => [
      ...previousMessages,

      {
        id: Date.now(),
        sender: "User",
        text: text,
      },

      {
        id: Date.now() + 1,
        sender: "Bot",
        text: "Message received!",
      },
    ]);
  };


  return (
    <div 
      data-testid="chatbot-interface"
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