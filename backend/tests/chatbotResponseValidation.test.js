import {
    describe,
    test,
    expect
} from "vitest";


import {
    getChatbotResponse,
    validateUserMessage
} from "../services/chatbotService.js";



describe(
    "Chatbot Response Validation Testing",
    () => {



    test(
        "should return booking response when user asks about booking",
        async () => {


            const response =
    await getChatbotResponse(
        "I want information about booking"
    );


            expect(response)
                .toContain("book");


        }
    );





    test(
        "should return price response when user asks about pricing",
        async () => {


            const response =
                await getChatbotResponse(
                    "How much is your price?"
                );


            expect(response)
                .toContain("pricing");


        }
    );





    test(
        "should return location response when user asks about location",
        async () => {


            const response =
                await getChatbotResponse(
                    "Where is your location?"
                );


            expect(response)
                .toContain("location");


        }
    );





    test(
        "should return greeting response when user says hello",
        async () => {


            const response =
                await getChatbotResponse(
                    "Hello"
                );


            expect(response)
                .toContain("Hello");


        }
    );





    test(
        "should return fallback response for unknown message",
        async () => {


            const response =
                await getChatbotResponse(
                    "asdfgh random question"
                );


            expect(response)
                .toContain(
                    "don't understand"
                );


        }
    );





    test(
        "should validate user message input",
        () => {


            expect(
                validateUserMessage("Hi")
            )
            .toBe(true);



            expect(
                validateUserMessage("")
            )
            .toBe(false);



            expect(
                validateUserMessage(null)
            )
            .toBe(false);



        }
    );



});