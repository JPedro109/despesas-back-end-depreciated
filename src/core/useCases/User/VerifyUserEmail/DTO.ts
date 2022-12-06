import { InvalidParamError, MissingParamError } from "../../../../utils/error";

export class DTO {
	constructor(public email: string, public token: string) {
		if(!email || !token) throw new MissingParamError("Preencha todos os campos");

		if(typeof email !== "string" || typeof token !== "string") 
			throw new InvalidParamError("Os tipos dos campos estão incorretos");
	}
}