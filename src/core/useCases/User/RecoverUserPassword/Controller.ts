import { IRequestRouters } from "../../../adapter/interfaces/IRequestRouters";
import { ok } from "../../../adapter/adapterResponse";
import { recoverUserPassword } from "./Factory";
import { DTO } from "./DTO";

export default new class RecoverUserPasswordController {

	async handle(request: IRequestRouters) {
		const { email, token } = request.query;

		const { password, passwordConfirm } = request.body;

		const dto = new DTO(email, token, password, passwordConfirm);

		const response = await recoverUserPassword.execute(dto);

		return ok(response);
	}
};