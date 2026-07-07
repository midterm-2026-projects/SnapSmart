export default function MessageDisplay({ messages }) {
  return (
    <div 
      data-testid="message-display"
      className="message-display"
    >
      {messages.length === 0 ? (
        <p data-testid="empty-message">
          No messages yet.
        </p>
      ) : (
        messages.map((message) => (
          <div 
            key={message.id || message.text}
            data-testid="message-item"
            className={`message ${message.sender.toLowerCase()}`}
          >
            <strong>{message.sender}:</strong>{" "}
            <span>{message.text}</span>
          </div>
        ))
      )}
    </div>
  );
}