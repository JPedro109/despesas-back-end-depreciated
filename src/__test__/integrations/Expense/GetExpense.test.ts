import { setup } from "../setup";
import { Rules as GetExpense } from "../../../core/useCases/Expense/GetExpense/Rules";
import { expenseRepository } from "../../../data/repositories/ExpenseRepository";

describe("Unit Test - Get Expense", () => {

	setup();

	test("Should get expense", async () => {

		const getExpense = new GetExpense(expenseRepository);
		const response = await getExpense.execute({ userId: "1" });

		expect(response[0].id).not.toBeUndefined();
		expect(response[0].expenseName).not.toBeUndefined();
		expect(response[0].dueDate).not.toBeUndefined();
		expect(response[0].price).not.toBeUndefined();
	});

});