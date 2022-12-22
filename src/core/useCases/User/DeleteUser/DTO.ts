import { InvalidParamError, MissingParamError } from "../../../../utils/error";

export class DTO {
	constructor(
		public userId: string,
		public password: string,
		public passwordConfirm: string
	) {
		if(!userId || !password || !passwordConfirm)
			throw new MissingParamError("Preencha todos os campos");
		
		if(typeof userId !== "string" || typeof password !== "string" || typeof passwordConfirm !== "string")
			throw new InvalidParamError("Os tipos dos campos estão incorretos");

		if(password !== passwordConfirm) throw new InvalidParamError("As senhas não coincidem");
	}
}