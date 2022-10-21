import { setup } from "../setup";
import request from "supertest";
import app from "../../../app";

describe("Unit Test - Get Expense", () => {

	setup();

	test("Should get expense", async () => {

		const token = await request(app)
			.post("/user/login")
			.send({
				email: "emailVERIFIED@test.com",
				password: "Password1234"
			});
		const response = await request(app)
			.get("/expenses")
			.set("Authorization", `Bearer ${token.body.response.accessToken}`);

		expect(response.body.response[0].id).not.toBeUndefined();
		expect(response.body.response[0].expenseName).not.toBeUndefined();
		expect(response.body.response[0].dueDate).not.toBeUndefined();
		expect(response.body.response[0].price).not.toBeUndefined();
	});

});