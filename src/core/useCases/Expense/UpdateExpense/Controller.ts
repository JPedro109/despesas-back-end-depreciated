import { IRequestRouters } from "../../../adapter/interfaces/IRequestRouters";
import { ok } from "../../../adapter/adapterResponse";
import { updateExpense } from "./Factory";

export default new class UpdateExpenseController {

	async handle(request: IRequestRouters) {
		const { id } = request.params;

		const { expenseName, price, dueDate } = request.body;

		const userId = request.userId;

		const response = await updateExpense.execute({ userId, id, expenseName, price, dueDate });

		return ok(response);
	}
};