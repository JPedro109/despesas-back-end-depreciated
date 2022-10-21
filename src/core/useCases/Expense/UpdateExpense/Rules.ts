import { IExpenseRepository } from "../../../../data/repositories/ExpenseRepository/IExpenseRepository";
import { InvalidParamError, MissingParamError } from "../../../../utils/error";
import { DTO } from "./DTO";

export class Rules {

	constructor(private repository: IExpenseRepository) {}

	async execute({ userId, id, expenseName, price, dueDate }: DTO) {

		if(!expenseName)
			throw new MissingParamError("Preencha todos os campos");

		if(price <= 0) throw new InvalidParamError("O preço deve ser maior que zero");

		await this.repository.update(userId, id, expenseName, dueDate, price);

		return {
			id,
			expenseName,
			price,
			dueDate
		};
	}
}