const getChatbotResponse = async (message) => {


    if (!message || message.trim() === "") {

        throw new Error("Message cannot be empty");

    }



    const input = message.toLowerCase();



    if (
        input.includes("hello") ||
        input.includes("hi")
    ) {

        return "Hello! I am your AI photography assistant. How can I help you today?";

    }



    if (
        input.includes("price") ||
        input.includes("package")
    ) {

        return "We offer different photography packages depending on your event needs.";

    }



    if (
        input.includes("booking") ||
        input.includes("schedule")
    ) {

        return "I can help you with booking inquiries. Please provide your preferred date.";

    }



    return "Sorry, I don't understand your message.";

};




const validateUserMessage = (message) => {


    if (!message) {

        return false;

    }


    if (message.trim().length === 0) {

        return false;

    }


    return true;

};



export default {

    getChatbotResponse,
    validateUserMessage

};