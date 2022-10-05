import { IExpenseRepository } from "../../../../data/repositories/ExpenseRepository/IExpenseRepository";
import { MissingParamError } from "../../../../utils/error";
import { DTO } from "./DTO";

export class Rules {

	constructor(private repository: IExpenseRepository) {}

	async execute({ userId, id, expenseName, price, dueDate }: DTO) {

		if(!expenseName || !dueDate || !price)
			return new MissingParamError("Preencha todos os campos");

		await this.repository.update(userId, id, expenseName, dueDate, price);

		return "Despesa atualizada com sucesso";
	}
}