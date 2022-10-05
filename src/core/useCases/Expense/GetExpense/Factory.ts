import { expenseRepository } from "../../../../data/repositories/ExpenseRepository";
import { Rules as GetExpense } from "./Rules";

export const getExpense = new GetExpense(expenseRepository);