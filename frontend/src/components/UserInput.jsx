import { useState } from "react";

export default function UserInput({ onSend }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedInput = input.trim();

    // Prevent empty messages
    if (!trimmedInput) {
      return;
    }

    onSend(trimmedInput);
    setInput("");
  };

  return (
    <form 
      data-testid="user-input-form"
      onSubmit={handleSubmit}
    >
      <input
        data-testid="user-input"
        type="text"
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