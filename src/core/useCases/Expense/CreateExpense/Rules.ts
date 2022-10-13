import { IExpenseRepository } from "../../../../data/repositories/ExpenseRepository/IExpenseRepository";
import { MissingParamError } from "../../../../utils/error";
import { DTO } from "./DTO";
import { toolkit } from "../../../../utils/toolkit";

export class Rules {

	constructor(private repository: IExpenseRepository) {}

	async execute({ userId, expenseName, price, dueDate }: DTO) {

		if(!expenseName || !dueDate || !price)
			return new MissingParamError("Preencha todos os campos");

		const id = toolkit.generation.id();

		await this.repository.create(userId, id, expenseName, dueDate, price);

		return {
			expenseName, 
			dueDate,
			price
		};
	}
}