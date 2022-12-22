import { InvalidParamError } from "../../../../utils/error";
import { IUserRepository } from "../../../../data/repositories/UserRepository/IUserRepository";
import { DTO } from "./DTO";

export class Rules {

	constructor(private repository: IUserRepository) { }

	async execute({ email, token }: DTO) {
		const emailIsVeried = await this.repository.findByEmailVerified(email);

		if (emailIsVeried) throw new InvalidParamError("Email já verificado");

		const userToken = await this.repository.getVerificationTokenByEmail(email);

		if (token !== userToken) throw new InvalidParamError("Token inválido");

		await this.repository.verifyEmail(email);

		return email;
	}
}