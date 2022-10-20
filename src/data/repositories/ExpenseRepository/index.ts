import { dbAdapter } from "../../adapter";
import { ExpenseRepository } from "./ExpenseRepository";

export const expenseRepository = new ExpenseRepository(dbAdapter);