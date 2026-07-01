export default function ChatWindow({ messages = [] }) {
  return (
    <div data-testid="chat-window">
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </div>
  );
}