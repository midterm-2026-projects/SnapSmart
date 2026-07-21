export async function getChatbotResponse(message) {
  const userMessage = message.toLowerCase().trim();

  if (userMessage.includes("booking")) {
    return "You can book a photography session through our booking page.";
  }

  if (userMessage.includes("price")) {
    return "Our pricing depends on the package you choose.";
  }

  if (userMessage.includes("location")) {
    return "Our studio location is available on the Contact Us page.";
  }

  if (userMessage.includes("hello") || userMessage.includes("hi")) {
    return "Hello! How can I help you today?";
  }

  return "Sorry, I don't understand your question yet.";
}

export function validateUserMessage(message) {
  return (
    typeof message === "string" &&
    message.trim().length > 0
  );
}