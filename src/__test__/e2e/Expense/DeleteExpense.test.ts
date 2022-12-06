import { setup } from "../setup";
import request from "supertest";
import app from "../../../app";

describe("E2E Test - Delete Expense", () => {

	setup();

	test("Should not delete expense, because it not is exists", async () => {
		const token = await request(app)
			.post("/user/login")
			.send({
				email: "emailVERIFIED@test.com",
				password: "Password1234"
			});
		const response = await request(app)
			.delete("/expenses/delete/8")
			.set("Authorization", `Bearer ${token.body.response.accessToken}`);

		expect(response.statusCode).toBe(404);
		expect(response.body.code).toBe("NotFoundError");
	});

	test("Should delete expense", async () => {
		const token = await request(app)
			.post("/user/login")
			.send({
				email: "emailVERIFIED@test.com",
				password: "Password1234"
			});
		const response = await request(app)
			.delete("/expenses/delete/1")
			.set("Authorization", `Bearer ${token.body.response.accessToken}`);

		expect(response.statusCode).toBe(200);
		expect(response.body.response).toBe("1");
	});
});