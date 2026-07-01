import { useState } from "react";

export default function UserInput({ onSend }) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <div>
      <input
        data-testid="user-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button data-testid="send-button" onClick={handleSubmit}>
        Send
      </button>
    </div>
  );
}