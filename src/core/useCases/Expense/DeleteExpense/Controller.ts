import { IRequestRouters } from "../../../adapter/interfaces/IRequestRouters";
import { ok } from "../../../adapter/adapterResponse";
import { deleteExpense } from "./Factory";
import { DTO } from "./DTO";

export default new class DeleteExpenseController {

	async handle(request: IRequestRouters) {
		const { id } = request.params;

		const dto = new DTO(id);

		const response = await deleteExpense.execute(dto);

		return ok(response);
	}
};