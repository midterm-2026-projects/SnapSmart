const chatbotResponses = [
  {
    keywords: ["hello", "hi", "hey"],
    response: "Hello! How can I help you today?",
  },
  {
    keywords: ["booking", "book"],
    response: "You can book a photography session through our booking page.",
  },
  {
    keywords: ["price", "pricing", "package"],
    response: "Our photography packages start at ₱2,500.",
  },
  {
    keywords: ["contact"],
    response: "You may contact Toni Photography through our Facebook page or mobile number.",
  },
];

function searchResponseByKeyword(keyword) {
  if (!keyword || typeof keyword !== "string") {
    return null;
  }

  const search = keyword.toLowerCase();

  return (
    chatbotResponses.find((item) =>
      item.keywords.some((word) => word === search)
    ) || null
  );
}

function getChatbotResponse(message) {
  if (!validateUserMessage(message)) {
    return "Invalid message.";
  }

  const words = message.toLowerCase().split(/\s+/);

  for (const word of words) {
    const result = searchResponseByKeyword(word);

    if (result) {
      return result.response;
    }
  }

  return "Sorry, I couldn't understand your message.";
}

function validateUserMessage(message) {
  return (
    typeof message === "string" &&
    message.trim().length > 0
  );
}

export {
  chatbotResponses,
  searchResponseByKeyword,
  getChatbotResponse,
  validateUserMessage,
};