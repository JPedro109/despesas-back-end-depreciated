import { setup } from "../setup";
import { Rules as DeleteExpense } from "../../../core/useCases/Expense/DeleteExpense/Rules";
import { expenseRepository } from "../../../data/repositories/ExpenseRepository";

describe("Unit Test - Delete Expense", () => {

	setup();

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