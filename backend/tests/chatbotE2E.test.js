import { describe, test, expect } from "vitest";
import request from "supertest";
import app from "../app.js";


const isCI = process.env.CI;


describe.skipIf(isCI)(
    "Chatbot End-to-End Testing",
    () => {


        test(
            "should send user message and receive AI generated response",
            async () => {


                const response =
                    await request(app)
                    .post("/api/chatbot")
                    .send({

                        message:
                        "How can I book a photography session?"

                    });



                expect(response.status)
                    .toBe(200);



                expect(response.body)
                    .toHaveProperty(
                        "response"
                    );



                expect(
                    typeof response.body.response
                )
                    .toBe("string");



                expect(
                    response.body.response.length
                )
                    .toBeGreaterThan(0);



            }
        );



        test(
            "should return AI response for greeting message",
            async () => {


                const response =
                    await request(app)
                    .post("/api/chatbot")
                    .send({

                        message:
                        "Hello"

                    });



                expect(response.status)
                    .toBe(200);



                expect(response.body)
                    .toHaveProperty(
                        "response"
                    );



                expect(
                    response.body.response
                )
                    .toBeTruthy();



            }
        );



        test(
            "should reject empty chatbot message",
            async () => {


                const response =
                    await request(app)
                    .post("/api/chatbot")
                    .send({

                        message:
                        ""

                    });



                expect(response.status)
                    .toBe(400);



            }
        );


    }
);