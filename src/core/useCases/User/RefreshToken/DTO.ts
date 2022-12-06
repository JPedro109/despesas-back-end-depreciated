import { InvalidParamError, MissingParamError } from "../../../../utils/error";

export class DTO {
	constructor (public refreshToken: string) {
		if(!refreshToken) throw new MissingParamError("O token de refresh precisa ser enviado");

		if(typeof refreshToken !== "string") throw new InvalidParamError("O tipo do token está incorreto");
	}
}