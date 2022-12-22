import { IRequestRouters } from "../../../adapter/interfaces/IRequestRouters";
import { ok } from "../../../adapter/adapterResponse";
import { refreshToken } from "./Factory";
import { DTO } from "./DTO";

export default new class RefreshTokenController {

	async handle(request: IRequestRouters) {
		const { ["refreshToken"]: token } = request.body;

		const dto = new DTO(token);

		const response = await refreshToken.execute(dto);

		return ok(response);
	}
};