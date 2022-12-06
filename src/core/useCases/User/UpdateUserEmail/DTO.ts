import { InvalidParamError, MissingParamError } from "../../../../utils/error";

export class DTO {
	constructor(
		public userId: string,
		public email: string,
		public token: string
	) {
		if(!userId || !email || !token) throw new MissingParamError("Preencha todos os campos");
		
		if(typeof userId !== "string" || typeof email !== "string" || typeof token !== "string")
			throw new InvalidParamError("Os tipos dos campos estão incorretos");
	}
}