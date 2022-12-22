import { InvalidParamError, MissingParamError, PasswordInvalidError } from "../../../../utils/error";
import { toolkit } from "../../../../utils/toolkit";

export class DTO {
	constructor (
		public email: string,
		public token: string,
		public password: string,
		public passwordConfirm: string
	) {
		if(!email || !token || !password || !passwordConfirm) throw new MissingParamError("Preencha todos os campos");

		if(
			typeof email !== "string" || 
			typeof token !== "string" || 
			typeof password !== "string" || 
			typeof passwordConfirm !== "string"
		) throw new InvalidParamError("Os tipos dos campos estão incorretos");

		const passwordIsValid = toolkit.validation.password(password);

		if (!passwordIsValid) throw new PasswordInvalidError();

		if (password !== passwordConfirm) throw new InvalidParamError("As senhas não coincidem");
	}
}