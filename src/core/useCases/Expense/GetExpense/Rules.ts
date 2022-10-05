import { IExpenseRepository } from "../../../../data/repositories/ExpenseRepository/IExpenseRepository";
import { DTO } from "./DTO";

export class Rules {

	constructor(private repository: IExpenseRepository) {}

	async execute({ userId }: DTO) {
		return (await this.repository.getAllExpenses(userId)).map(element => {
			return {
				id: element.id,
				expenseName: element.expense_name,
				dueDate: element.due_date,
				price: element.price
			};
		});
	}
}