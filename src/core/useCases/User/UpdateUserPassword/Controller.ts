import { IRequestRouters } from "../../../adapter/interfaces/IRequestRouters";
import { ok } from "../../../adapter/adapterResponse";
import { updateUserPassword } from "./Factory";
import { DTO } from "./DTO";

export default new class UpdateUserPasswordController {

	async handle(request: IRequestRouters) {
		const { password, passwordConfirm, passwordCurrent } = request.body;

		const userId = request.userId;

		const dto = new DTO(userId, passwordCurrent, password, passwordConfirm);

		const response = await updateUserPassword.execute(dto);

		return ok(response);
	}
};