import { dbAdapterInMemory } from "../../../data/adapter";
import { MockRepository } from "../../../data/repositories/MockRepository/MockRepository";
import { UserRepository } from "../../../data/repositories/UserRepository/UserRepository";
import { ExpenseRepository } from "../../../data/repositories/ExpenseRepository/ExpenseRepository";

export const mockRepositoryInMemory = new MockRepository(dbAdapterInMemory);
export const userRepositoryInMemory= new UserRepository(dbAdapterInMemory);
export const expenseRepositoryInMemory= new ExpenseRepository(dbAdapterInMemory);