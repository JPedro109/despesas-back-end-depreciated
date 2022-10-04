import { DBAdapter } from "../../adapter/DBAdapter";
import { Expense } from "../../models/Expense";
import { ExpenseRepository } from "./ExpenseRepository";

const adapter = new DBAdapter<Expense>("expense");
export const expenseRepository = new ExpenseRepository(adapter);