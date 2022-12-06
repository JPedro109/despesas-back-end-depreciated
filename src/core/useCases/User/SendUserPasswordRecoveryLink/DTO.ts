import { InvalidParamError, MissingParamError } from "../../../../utils/error";

export class DTO {
	constructor(public email: string) {
		if(!email) throw new MissingParamError("Preencha o campo de e-mail");

		if(typeof email !== "string") throw new InvalidParamError("O tipo do campo de e-mail está incorreto");
	}
}