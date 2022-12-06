import { IExpenseRepository } from "../../../../data/repositories/ExpenseRepository/IExpenseRepository";
import { DTO } from "./DTO";
import { toolkit } from "../../../../utils/toolkit";

export class Rules {

	constructor(private repository: IExpenseRepository) {}

	async execute({ userId, expenseName, price, dueDate }: DTO) {

		const id = toolkit.generation.id();

		await this.repository.create(userId, id, expenseName, dueDate, price);

		return {
			expenseName, 
			dueDate,
			price
		};
	}
}