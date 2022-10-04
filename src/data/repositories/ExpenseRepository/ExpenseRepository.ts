import { IDBAdapter } from "../../adapter/IDBAdapter";
import { Expense } from "../../models/Expense";
import { IExpenseRepository } from "./IExpenseRepository";

export class ExpenseRepository implements IExpenseRepository {

	constructor(private adapter: IDBAdapter<Expense>) { }
    
	async create(userId: string, id: string, expenseName: string, dueDate: Date, price: number): Promise<Expense> {
		return await this.adapter.insert({
			id,
			user_id: userId,
			expense_name: expenseName,
			due_date: dueDate,
			price
		});
	}

	async getAllExpenses(userId: string): Promise<Expense[]> {
		return await this.adapter.getAll({ user_id: userId }) as Expense[];
	}

	async update(userId: string, id: string, expenseName: string, dueDate: Date, price: number): Promise<Expense> {
		return await this.adapter.update({ id }, { user_id: userId, expense_name: expenseName, due_date: dueDate, price });
	}

	async delete(id: string): Promise<Expense> {
		return await this.adapter.delete({ id });
	}
}