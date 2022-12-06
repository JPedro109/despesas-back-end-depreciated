import { IRequestRouters } from "../../../adapter/interfaces/IRequestRouters";
import { created } from "../../../adapter/adapterResponse";
import { createExpense } from "./Factory";
import { DTO } from "./DTO";

export default new class CreateExpenseController {

	async handle(request: IRequestRouters) {
		const { expenseName, price, dueDate } = request.body;

		const userId = request.userId;

		const dto = new DTO(userId, expenseName, dueDate, price);

		const response = await createExpense.execute(dto);

		return created(response);
	}
};