import groq from "../config/groqClient.js";


export async function getChatbotResponse(message){


    const response =
        await groq.chat.completions.create({

            model:"llama-3.1-8b-instant",

            messages:[

                {
                    role:"system",
                    content:`
You are SnapSmart AI.

SnapSmart is a photography booking and gallery management system.

Rules:
- Help customers with SnapSmart services only.
- Explain booking process, packages, pricing, and galleries.
- Do not invent features.
- Do not mention other photographers.
- Keep answers short and professional.
`
                },


                {
                    role:"user",
                    content:message
                }

            ]

        });



    return response
        .choices[0]
        .message
        .content;


}



export function validateUserMessage(message){

    return(
        typeof message==="string" &&
        message.trim().length>0
    );

}
