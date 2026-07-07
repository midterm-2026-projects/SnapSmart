import { describe, test, expect, vi } from "vitest";

import * as controller from "../controllers/bookingController.js";

describe("Booking Controller", () => {

    test("create()", () => {

        const req = {

            body: {

                clientName: "Franklin",
                eventDate: "2026-07-10"

            }

        };

        const res = {

            status: vi.fn().mockReturnThis(),

            json: vi.fn()

        };

        controller.create(req, res);

        expect(res.status).toHaveBeenCalledWith(201);

    });

});