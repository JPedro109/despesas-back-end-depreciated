import { APP_URL } from "../../../../config";
import { InvalidParamError } from "../../../../utils/error";
import { IUserRepository } from "../../../../data/repositories/UserRepository/IUserRepository";
import { toolkit } from "../../../../utils/toolkit";
import { DTO } from "./DTO";

export class Rules {

	constructor(private repository: IUserRepository) { }

	async execute({ email, password }: DTO) {

		if (await this.repository.findEmailByEmail(email)) throw new InvalidParamError("Email já cadastrado");

		const id = toolkit.generation.id();

		const token = toolkit.generation.token();

		const hashPassword = toolkit.password.encryptPassword(password);

		await this.repository.store(id, email, hashPassword, token);

		await toolkit.email.sendMail(email, "Validação de Email", "createUser", {
			appUrl: APP_URL,
			email: email,
			token: token
		});

		return email;
	}
}