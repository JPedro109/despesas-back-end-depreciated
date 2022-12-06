import { IRequestRouters } from "../../../adapter/interfaces/IRequestRouters";
import { ok } from "../../../adapter/adapterResponse";
import { sendUserEmailUpdateLink } from "./Factory";
import { DTO } from "./DTO";

export default new class SendUserEmailUpdateLinkController {

	async handle(request: IRequestRouters) {
		const { email } = request.body;

		const userId = request.userId;

		const dto = new DTO(userId, email);

		const response = await sendUserEmailUpdateLink.execute(dto);

		return ok(response);
	}
};