import { expenseRepository } from "../../../../data/repositories/ExpenseRepository";
import { Rules as DeleteExpense } from "./Rules";

export const deleteExpense = new DeleteExpense(expenseRepository);