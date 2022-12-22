import { setup } from "../setup";
import { Rules as CreateExpense } from "../../../core/useCases/Expense/CreateExpense/Rules";
import { MissingParamError } from "../../../utils/error";
import { expenseRepositoryInMemory } from "../Mock";

describe("Unit Test - Create Expense", () => {

	setup();

	test("Should create expense", async () => {

		const createExpense = new CreateExpense(expenseRepositoryInMemory);
		const expense = {
			userId: "1",
			expenseName: "Aluguel",
			dueDate: new Date("2029-08-20"),
			price: 925
		};

		const response = await createExpense.execute(expense);

		if(response instanceof MissingParamError) throw new Error("Unit test of should create expense is failed");

		expect(response.expenseName).toBe(expense.expenseName);
		expect(response.dueDate).toBe(expense.dueDate);
		expect(response.price).toBe(expense.price);
	});

});