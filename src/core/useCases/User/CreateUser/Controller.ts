import { IRequestRouters } from "../../../adapter/interfaces/IRequestRouters";
import { created } from "../../../adapter/adapterResponse";
import { createUser } from "./Factory";
import { DTO } from "./DTO";

export default new class CreateUserController {

	async handle(request: IRequestRouters) {
		const { email, password, passwordConfirm } = request.body;

		const dto = new DTO(email, password, passwordConfirm);

		const response = await createUser.execute(dto);

		return created(response);
	}
};