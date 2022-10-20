import { setup } from "../setup";
import { Rules as UpdateExpense } from "../../../core/useCases/Expense/UpdateExpense/Rules";
import { MissingParamError } from "../../../utils/error";
import { expenseRepository } from "../../../data/repositories/ExpenseRepository";

describe("Unit Test - Update Expense", () => {

	setup();

	test("Should not update expense, because expense name field is empty", async () => {

		const updateExpense = new UpdateExpense(expenseRepository);
		const expense = {
			userId: "1",
			id: "1",
			expenseName: "",
			dueDate: new Date("2027-08-20"),
			price: 925
		};
		await updateExpense.execute(expense).catch(e => {
			expect(e).toBeInstanceOf(MissingParamError);
		});
	});
	
	test("Should not update expense, because the price is invalid", async () => {
		const updateExpense = new UpdateExpense(expenseRepository);
		const expense = {
			userId: "1",
			id: "1",
			expenseName: "Aluguel",
			dueDate: new Date("2027-08-20"),
			price: 0
		};
		await updateExpense.execute(expense).catch(e => {
			expect(e).toBeInstanceOf(MissingParamError);
		});
	});
	
	test("Should update expense", async () => {
	
		const updateExpense = new UpdateExpense(expenseRepository);
		const expense = {
			userId: "1",
			id: "1",
			expenseName: "Aluguel",
			dueDate: new Date("2029-08-20"),
			price: 925
		};
	
		const response = await updateExpense.execute(expense);
	
		if(response instanceof MissingParamError) throw new Error("Unit test of should create expense is failed");
	
		expect(response.id).toBe(expense.id);
		expect(response.expenseName).toBe(expense.expenseName);
		expect(response.dueDate).toBe(expense.dueDate);
		expect(response.price).toBe(expense.price);
	});

});