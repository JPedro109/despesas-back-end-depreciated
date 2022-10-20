import { setup } from "../setup";
import { Rules as CreateExpense } from "../../../core/useCases/Expense/CreateExpense/Rules";
import { InvalidParamError, MissingParamError } from "../../../utils/error";
import { expenseRepositoryInMemory } from "../Mock";

describe("Unit Test - Create Expense", () => {

	setup();

	test("Should not create expense, because expense name field is empty", async () => {
		const createExpense = new CreateExpense(expenseRepositoryInMemory);
		const expense = {
			userId: "1",
			expenseName: "",
			dueDate: new Date("2027-08-20"),
			price: 925
		};
		await createExpense.execute(expense).catch(e => {
			expect(e).toBeInstanceOf(MissingParamError);
		});
	});

	test("Should not create expense, because the price is invalid", async () => {
		const createExpense = new CreateExpense(expenseRepositoryInMemory);
		const expense = {
			userId: "1",
			expenseName: "Aluguel",
			dueDate: new Date("2027-08-20"),
			price: 0
		};
		await createExpense.execute(expense).catch(e => {
			expect(e).toBeInstanceOf(InvalidParamError);
		});
	});

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