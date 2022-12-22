import { MissingParamError } from "../../../../utils/error";

export class DTO {
	constructor(public userId: string) {
		if(!userId) throw new MissingParamError("Preencha o campo userId");

		if(typeof userId !== "string") throw new MissingParamError("O tipo do campo userId está incorreto");
	}
}