import { setup } from "../setup";
import request from "supertest";
import app from "../../../app";

describe("E2E Test - Create Expense", () => {

	setup();

	test("Should not create expense, because expense name field is empty", async () => {
		const expense = {
			expenseName: "",
			dueDate: new Date("2027-08-20"),
			price: 925
		};

		const token = await request(app)
			.post("/user/login")
			.send({
				email: "emailVERIFIED@test.com",
				password: "Password1234"
			});
		const response = await request(app)
			.post("/expenses")
			.set("Authorization", `Bearer ${token.body.response.accessToken}`)
			.send(expense);
		
		expect(response.statusCode).toBe(400);
		expect(response.body.code).toBe("MissingParamError");
	});

	test("Should not create expense, because the price is invalid", async () => {
		const expense = {
			userId: "1",
			expenseName: "Aluguel",
			dueDate: new Date("2027-08-20"),
			price: 0
		};
		const token = await request(app)
			.post("/user/login")
			.send({
				email: "emailVERIFIED@test.com",
				password: "Password1234"
			});
		const response = await request(app)
			.post("/expenses")
			.set("Authorization", `Bearer ${token.body.response.accessToken}`)
			.send(expense);
		
		expect(response.statusCode).toBe(400);
		expect(response.body.code).toBe("InvalidParamError");
	});

	test("Should create expense", async () => {

		const expense = {
			userId: "1",
			expenseName: "Aluguel",
			dueDate: new Date("2029-08-20"),
			price: 925
		};

		const token = await request(app)
			.post("/user/login")
			.send({
				email: "emailVERIFIED@test.com",
				password: "Password1234"
			});
		const response = await request(app)
			.post("/expenses")
			.set("Authorization", `Bearer ${token.body.response.accessToken}`)
			.send(expense);
		
		expect(response.statusCode).toBe(201);
		expect(response.body.response.expenseName).toBe(expense.expenseName);
		expect(new Date(response.body.response.dueDate)).toStrictEqual(expense.dueDate);
		expect(response.body.response.price).toBe(expense.price);
	});

});