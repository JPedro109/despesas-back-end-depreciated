import { IRequestRouters } from "../../../adapter/interfaces/IRequestRouters";
import { ok } from "../../../adapter/adapterResponse";
import { getExpense } from "./Factory";
import { DTO } from "./DTO";

export default new class GetExpenseController {

	async handle(request: IRequestRouters) {

		const userId = request.userId;

		const dto = new DTO(userId);

		const response = await getExpense.execute(dto);

		return ok(response);
	}
};