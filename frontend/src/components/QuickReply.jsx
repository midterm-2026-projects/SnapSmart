export default function QuickReply({ options = [] }) {
  return (
    <div data-testid="quick-reply">
      {options.map((option, index) => (
        <button key={index}>{option}</button>
      ))}
    </div>
  );
}