import { IRequestRouters } from "../../../adapter/interfaces/IRequestRouters";
import { ok } from "../../../adapter/adapterResponse";
import { deleteExpense } from "./Factory";

export default new class DeleteExpenseController {

	async handle(request: IRequestRouters) {
		const { id } = request.params;

		const response = await deleteExpense.execute({ id });

		return ok(response);
	}
};