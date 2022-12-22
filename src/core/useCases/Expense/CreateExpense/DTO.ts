import { InvalidParamError, MissingParamError } from "../../../../utils/error";

export class DTO {
	constructor(
        public userId: string,
        public expenseName: string,
        public dueDate: Date,
        public price: number
	) {
		if(!userId || !expenseName || !dueDate || price === undefined) throw new MissingParamError("Preencha todos os campos");

		if(
			typeof userId !== "string" || 
            typeof expenseName !== "string" || 
            !(new Date(dueDate) instanceof Date) || 
            typeof price !== "number"
		) throw new InvalidParamError("Os tipos dos campos estão incorretos");

		if(price <= 0) throw new InvalidParamError("O preço deve ser maior que zero");
	}
}