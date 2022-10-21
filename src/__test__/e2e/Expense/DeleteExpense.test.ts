import { setup } from "../setup";
import request from "supertest";
import app from "../../../app";

describe("Unit Test - Delete Expense", () => {

	setup();

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

		expect(response.body.response).toBe("1");
	});
});