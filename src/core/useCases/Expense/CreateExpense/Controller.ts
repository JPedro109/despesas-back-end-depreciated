import { IRequestRouters } from "../../../adapter/interfaces/IRequestRouters";
import { created } from "../../../adapter/adapterResponse";
import { createExpense } from "./Factory";

export default new class CreateExpenseController {

	async handle(request: IRequestRouters) {
		const { expenseName, price, dueDate } = request.body;

		const userId = request.userId;

		const response = await createExpense.execute({ userId, expenseName, price, dueDate });

		return created(response);
	}
};