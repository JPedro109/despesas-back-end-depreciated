import { IRequestRouters } from "../../../adapter/interfaces/IRequestRouters";
import { ok } from "../../../adapter/adapterResponse";
import { updateExpense } from "./Factory";
import { DTO } from "./DTO";

export default new class UpdateExpenseController {

	async handle(request: IRequestRouters) {
		const { id } = request.params;

		const { expenseName, price, dueDate } = request.body;

		const userId = request.userId;

		const dto = new DTO(userId, id, expenseName, dueDate, price);

		const response = await updateExpense.execute(dto);

		return ok(response);
	}
};