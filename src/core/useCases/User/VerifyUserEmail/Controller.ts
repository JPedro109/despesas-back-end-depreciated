import { IRequestRouters } from "../../../adapter/interfaces/IRequestRouters";
import { ok } from "../../../adapter/adapterResponse";
import { verifyUserEmail } from "./Factory";
import { DTO } from "./DTO";

export default new class VerifyUserEmailController {

	async handle(request: IRequestRouters) {
		const { email, token } = request.query;

		const dto = new DTO(email, token);

		const response = await verifyUserEmail.execute(dto);

		return ok(response);
	}
};