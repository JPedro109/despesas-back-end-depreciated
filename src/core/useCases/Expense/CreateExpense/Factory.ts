import { expenseRepository } from "../../../../data/repositories/ExpenseRepository";
import { Rules as CreateExpense } from "./Rules";

export const createExpense = new CreateExpense(expenseRepository);