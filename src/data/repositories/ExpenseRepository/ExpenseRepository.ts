import { IDBAdapter } from "../../adapter/IDBAdapter";
import { Expense } from "../../models/Expense";
import { IExpenseRepository } from "./IExpenseRepository";

export class ExpenseRepository implements IExpenseRepository {

	constructor(private adapter: IDBAdapter) { }
    
	async create(userId: string, id: string, expenseName: string, dueDate: Date, price: number): Promise<Expense> {
		return await this.adapter.setEntity("expense").insert<Expense>({
			id,
			user_id: userId,
			expense_name: expenseName,
			due_date: dueDate,
			price
		});
	}

	async getOne(id: string): Promise<Expense> {
		return await this.adapter.setEntity("expense").getOne<Expense>({ id });
	}

	async getAllExpenses(userId: string): Promise<Expense[]> {
		return await this.adapter.setEntity("expense").getAll<Expense>({ user_id: userId }) as Expense[];
	}

	async update(userId: string, id: string, expenseName: string, dueDate: Date, price: number): Promise<Expense> {
		return await this
			.adapter
			.setEntity("expense")
			.update<Expense>({ id }, { user_id: userId, expense_name: expenseName, due_date: dueDate, price });
	}

	async delete(id: string): Promise<Expense> {
		return await this.adapter.setEntity("expense").delete<Expense>({ id });
	}
}