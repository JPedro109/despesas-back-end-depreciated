import { expenseRepository } from "../../../../data/repositories/ExpenseRepository";
import { Rules as UpdateExpense } from "./Rules";

export const updateExpense = new UpdateExpense(expenseRepository);