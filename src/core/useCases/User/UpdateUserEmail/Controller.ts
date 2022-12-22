import { IRequestRouters } from "../../../adapter/interfaces/IRequestRouters";
import { ok } from "../../../adapter/adapterResponse";
import { updateUserEmail } from "./Factory";
import { DTO } from "./DTO";

export default new class UpdateUserEmailController {

	async handle(request: IRequestRouters) {
		const { email, token } = request.query;

		const userId = request.userId;

		const dto = new DTO(userId, email, token);

		const response = await updateUserEmail.execute(dto);

		return ok(response);
	}
};