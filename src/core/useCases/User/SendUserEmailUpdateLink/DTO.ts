import { InvalidParamError, MissingParamError } from "../../../../utils/error";

export class DTO {
	constructor(public userId: string, public email: string) {
		if(!userId || !email) throw new MissingParamError("Preencha todos os campos");

		if(typeof userId !== "string" || typeof email !== "string") 
			throw new InvalidParamError("Os tipos dos campos estão incorretos");
	}
}