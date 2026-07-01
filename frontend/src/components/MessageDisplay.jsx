export default function MessageDisplay({ messages }) {
  return (
    <div data-testid="message-display">
      {messages.map((message, index) => (
        <p key={index}>
          <strong>{message.sender}:</strong> {message.text}
        </p>
      ))}
    </div>
  );
}