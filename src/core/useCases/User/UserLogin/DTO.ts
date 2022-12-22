import { InvalidParamError, MissingParamError } from "../../../../utils/error";

export class DTO {
	constructor(public email: string, public password: string) {
		if(!email || !password) throw new MissingParamError("Preencha todos os campos");

		if(typeof email !== "string" || typeof password !== "string") 
			throw new InvalidParamError("Os tipos dos campos estão incorretos");
	}
}