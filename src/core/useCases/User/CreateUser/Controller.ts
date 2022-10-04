import { IRequestRouters } from "../../../adapter/interfaces/IRequestRouters";
import { created } from "../../../adapter/adapterResponse";
import { createUser } from "./Factory";

export default new class CreateUserController {

	async handle(request: IRequestRouters) {
		const { email, password, passwordConfirm } = request.body;

		const response = await createUser.execute({ email, password, passwordConfirm });

		return created(response);
	}
};