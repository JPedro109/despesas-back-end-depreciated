import { IRequestRouters } from "../../../adapter/interfaces/IRequestRouters";
import { ok } from "../../../adapter/adapterResponse";
import { deleteUser } from "./Factory";
import { DTO } from "./DTO";

export default new class DeleteUserController {

	async handle(request: IRequestRouters) {
		const { password, passwordConfirm } = request.body;

		const userId = request.userId;

		const dto = new DTO(userId, password, passwordConfirm);

		const response = await deleteUser.execute(dto);

		return ok(response);
	}
};