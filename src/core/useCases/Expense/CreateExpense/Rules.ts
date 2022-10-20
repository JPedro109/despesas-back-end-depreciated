import { IExpenseRepository } from "../../../../data/repositories/ExpenseRepository/IExpenseRepository";
import { InvalidParamError, MissingParamError } from "../../../../utils/error";
import { DTO } from "./DTO";
import { toolkit } from "../../../../utils/toolkit";

export class Rules {

	constructor(private repository: IExpenseRepository) {}

	async execute({ userId, expenseName, price, dueDate }: DTO) {

		if(!expenseName)
			return new MissingParamError("Preencha o nome da despesa");

		if(price <= 0) throw new InvalidParamError("O preço deve ser maior que zero");

		const id = toolkit.generation.id();

		await this.repository.create(userId, id, expenseName, dueDate, price);

		return {
			expenseName, 
			dueDate,
			price
		};
	}
}