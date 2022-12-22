import { IRequestRouters } from "../../../adapter/interfaces/IRequestRouters";
import { ok } from "../../../adapter/adapterResponse";
import { sendUserPasswordRecoveryLink } from "./Factory";
import { DTO } from "./DTO";

export default new class SendUserPasswordRecoveryLinkController {

	async handle(request: IRequestRouters) {
		const { email } = request.body;

		const dto = new DTO(email);

		const response = await sendUserPasswordRecoveryLink.execute(dto);

		return ok(response);
	}
};