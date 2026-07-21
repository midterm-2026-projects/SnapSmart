import { describe, test, expect } from "vitest";

import {
    validateUserMessage
} from "../services/chatbotService.js";



describe(
"Chatbot Validation Testing",
()=>{


    test(
    "should accept valid chatbot message",
    ()=>{

        const result =
            validateUserMessage(
                "I want to book a photography session"
            );


        expect(result)
        .toBe(true);

    });



    test(
    "should reject empty message",
    ()=>{


        const result =
            validateUserMessage("");


        expect(result)
        .toBe(false);


    });



    test(
    "should reject whitespace-only message",
    ()=>{


        const result =
            validateUserMessage(
                "     "
            );


        expect(result)
        .toBe(false);


    });



    test(
    "should reject null message",
    ()=>{


        const result =
            validateUserMessage(
                null
            );


        expect(result)
        .toBe(false);


    });



    test(
    "should reject non-string message",
    ()=>{


        const result =
            validateUserMessage(
                12345
            );


        expect(result)
        .toBe(false);


    });

    test(
"should reject undefined message",
()=>{

    const result =
        validateUserMessage(undefined);

    expect(result)
    .toBe(false);

});



});