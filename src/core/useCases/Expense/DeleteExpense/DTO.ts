import { MissingParamError } from "../../../../utils/error";

export class DTO {
	constructor(public id: string) {
		if(!id) throw new MissingParamError("Preencha o campo id");

		if(typeof id !== "string") throw new MissingParamError("O tipo do campo id está incorreto");
	}
}