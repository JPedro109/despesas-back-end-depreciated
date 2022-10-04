import { Expense } from "../../models/Expense";

export interface IExpenseRepository {
    create(userId: string, id: string, expenseName: string, dueDate: Date, price: number): Promise<Expense>;
    getAllExpenses(userId: string): Promise<Expense[]>;
    update(userId: string, id: string, expenseName: string, dueDate: Date, price: number): Promise<Expense>;
    delete(id: string): Promise<Expense>;
}