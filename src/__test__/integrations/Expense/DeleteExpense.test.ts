import { setup } from "../setup";
import { Rules as DeleteExpense } from "../../../core/useCases/Expense/DeleteExpense/Rules";
import { expenseRepository } from "../../../data/repositories/ExpenseRepository";
import { NotFoundError } from "../../../utils/error";

describe("Unit Test - Delete Expense", () => {

	setup();

	test("Should not delete expense, because it not is exists", async () => {
		const deleteExpense = new DeleteExpense(expenseRepository);
		const expense = {
			userId: "1",
			id: "8"
		};
		await deleteExpense.execute(expense).catch(e => {
			expect(e).toBeInstanceOf(NotFoundError);
		});
	});

	test("Should delete expense", async () => {
		const deleteExpense = new DeleteExpense(expenseRepository);
		const expense = {
			userId: "1",
			id: "1"
		};
		const response = await deleteExpense.execute(expense);
		expect(response).toBe("1");
	});
});