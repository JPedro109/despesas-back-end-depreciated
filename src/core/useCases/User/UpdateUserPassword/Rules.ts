import { InvalidParamError } from "../../../../utils/error";
import { IUserRepository } from "../../../../data/repositories/UserRepository/IUserRepository";
import { toolkit } from "../../../../utils/toolkit";
import { DTO } from "./DTO";

export class Rules {

	constructor(private repository: IUserRepository) { }

	async execute({ userId, password, passwordCurrent }: DTO) {
		const userPassword = await this.repository.getPasswordById(userId);

		const passwordCompare = toolkit.password.comparePasswordEncrypt(passwordCurrent, userPassword);

		if (!passwordCompare) throw new InvalidParamError("Sua senha atual incorreta");

		const passwordNewCompare = toolkit.password.comparePasswordEncrypt(passwordCurrent, userPassword);

		if (!passwordNewCompare) throw new InvalidParamError("Sua senha não pode ser igual a anterior");

		const hashPassword = toolkit.password.encryptPassword(password);

		await this.repository.updatePasswordById(userId, hashPassword);

		return userId;
	}
}