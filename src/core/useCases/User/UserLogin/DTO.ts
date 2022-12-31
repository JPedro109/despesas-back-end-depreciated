import { InvalidParamError, MissingParamError, UnauthorizedError } from "../../../../utils/error";
import { toolkit } from "../../../../utils/toolkit";

export class DTO {
	constructor(public email: string, public password: string) {
		if(!email || !password) throw new MissingParamError("Preencha todos os campos");

		if(typeof email !== "string" || typeof password !== "string") 
			throw new InvalidParamError("Os tipos dos campos estão incorretos");

		const emailValid = toolkit.validation.email(email);

		if (!emailValid) throw new UnauthorizedError("Email/Senha Incorreto(s)");
	}
}