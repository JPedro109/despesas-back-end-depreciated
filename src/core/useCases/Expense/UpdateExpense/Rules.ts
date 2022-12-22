import { IExpenseRepository } from "../../../../data/repositories/ExpenseRepository/IExpenseRepository";
import { DTO } from "./DTO";

export class Rules {

	constructor(private repository: IExpenseRepository) {}

	async execute({ userId, id, expenseName, price, dueDate }: DTO) {

		await this.repository.update(userId, id, expenseName, dueDate, price);

		return {
			id,
			expenseName,
			price,
			dueDate
		};
	}
}