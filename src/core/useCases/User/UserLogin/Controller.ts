import { IRequestRouters } from "../../../adapter/interfaces/IRequestRouters";
import { ok } from "../../../adapter/adapterResponse";
import { userLogin } from "./Factory";
import { DTO } from "./DTO";

export default new class UserLoginController {

	async handle(request: IRequestRouters) {
		const { email, password } = request.body;

		const dto = new DTO(email, password);

		const response = await userLogin.execute(dto);

		return ok(response);
	}
};