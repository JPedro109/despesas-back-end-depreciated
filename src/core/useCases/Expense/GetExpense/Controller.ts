import { IRequestRouters } from "../../../adapter/interfaces/IRequestRouters";
import { ok } from "../../../adapter/adapterResponse";
import { getExpense } from "./Factory";

export default new class GetExpenseController {

	async handle(request: IRequestRouters) {

		const userId = request.userId;

		const response = await getExpense.execute({ userId });

		return ok(response);
	}
};