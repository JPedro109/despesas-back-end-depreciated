import { InvalidParamError, MissingParamError, PasswordInvalidError } from "../../../../utils/error";
import { toolkit } from "../../../../utils/toolkit";

export class DTO {
	constructor(
		public userId: string,
		public passwordCurrent: string,
		public password: string,
		public passwordConfirm: string
	) {
		if(!userId || !passwordCurrent || !password || !passwordConfirm) throw new MissingParamError("Preencha todos os campos");
		
		if(
			typeof userId !== "string" || 
			typeof passwordCurrent !== "string" || 
			typeof password !== "string" || 
			typeof passwordConfirm !== "string"
		)
			throw new InvalidParamError("Os tipos dos campos estão incorretos");

		if(password !== passwordConfirm) throw new InvalidParamError("As senhas não coincidem");

		const passwordIsValid = toolkit.validation.password(password);

		if (!passwordIsValid) throw new PasswordInvalidError();
	}
}